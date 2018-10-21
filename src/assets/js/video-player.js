// video overlayer: start

$(document).ready(function(e) {
  $(".talk-card__link").unbind("click").bind("click", function(e) {
    e.preventDefault();
    var src = $(this).attr("data-url");
    $(".overlay-video").show();
    setTimeout(function() {
      $(".overlay-video").addClass("o1");
      $("#player").attr("src", src);
    }, 100);
  });

  // video overlayer: close it if you click outside of the modal

  $(".overlay-video").click(function(event) {
    if (!$(event.target).closest(".videoWrapperExt").length) {
      var PlayingVideoSrc = $("#player").attr("src").replace("&autoplay=1", "");
      $("#player").attr("src", PlayingVideoSrc);
      $(".overlay-video").removeClass("o1");
      setTimeout(function() {
        $(".overlay-video").hide();
      }, 600);
    }
  });
});
