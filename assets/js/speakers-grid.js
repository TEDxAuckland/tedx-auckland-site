---
---
var speakersJson = {{ site.speakers | jsonify }}

var app = new Vue({
  el: '#speakersGrid',

  data: {
    speakers: speakersJson,
    activeIndex: null,
    currentPage: 0,
    rowsPerPage: 3,
    // speakersPerPage: 12,
    noOfColumns: {
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

    numberOfPages: function() {
      return Math.ceil(this.speakers.length / this.speakersPerPage);
    },

    speakersPerPage: function() {
      var screenSize = Foundation.MediaQuery.current;
      return this.noOfColumns[screenSize] * this.rowsPerPage;
    },

    currentPageSpeakers: function() {
      var start = this.currentPage * this.speakersPerPage;
      var end = start + this.speakersPerPage;
      return this.speakers.slice(start, end);
    },

    nextPageActive: function() {
      return this.currentPage + 1 < this.numberOfPages;
    },

    previousPageActive: function() {
      return this.currentPage > 0;
    }

  },

  methods: {

    nextPage: function() {
      this.currentPage ++;
      this.activeIndex = null;
    },

    previousPage: function() {
      this.currentPage --;
      this.activeIndex = null;
    },

    expandingPreviewIndex: function() {
      var screenSize = Foundation.MediaQuery.current;
      var index = this.activeIndex + 1;
      var columns = this.noOfColumns[screenSize];
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
