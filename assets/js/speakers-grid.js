---
---
var speakersJson = {{ site.speakers | jsonify }}

var app = new Vue({
  el: '#speakersGrid',

  data: {
    speakers: speakersJson,
    activeIndex: null,
    screenSizes: {
      "small": 2,
      "medium": 3,
      "large": 4,
      "xlarge": 4,
      "xxlarge": 4
    }
  },

  computed: {

    activeSpeaker: function() {
      return this.speakers[this.activeIndex];
    },

  },

  methods: {

    expandingPreviewIndex: function() {
      var screenSize = Foundation.MediaQuery.current;
      var index = this.activeIndex + 1;
      var columns = this.screenSizes[screenSize];
      var row = Math.ceil(index / columns);
      var numRows = Math.ceil(this.speakers.length / columns);
      var previewIndex = row * columns - 1;

      if (row >= numRows) {
        return this.speakers.length - 1;
      } else {
        return previewIndex;
      }
    },

    speakerActive: function(index) {
      if (index === this.activeIndex) {
        return true;
      } else {
        return false;
      }
    },

    expandingPreviewVisible: function(index) {
      if (this.activeIndex === null) {
        return false
      } else {
        return index === this.expandingPreviewIndex()
      }
    },

    toggleActiveSpeaker: function(index) {
      if (this.activeIndex === index) {
        this.activeIndex = null;
      } else {
        this.activeIndex = index
      }
    }

  }
})
