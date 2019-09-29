var $ = require('jquery');

$(document).on("scroll", function () {
  console.log("scrollin")
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var imgs = document.querySelectorAll(".scroll-transition-fade")
  for (var i = 0; i < imgs.length; i++) {
      var pic = imgs[i]
      if ($(pic).position().top < pageBottom) { 
          $(pic).addClass("visible")
      }
      else {
          $(tag).removeClass("visible")
      }
  }
})