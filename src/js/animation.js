const $ = require('jquery');

const scrollFade = () => {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var imgs = $(".scroll-transition-fade")
    for (var i = 0; i < imgs.length; i++) {
      var pic = imgs[i]
      const pos = $(pic).offset().top - pageBottom;
      if (pos < 0) { 
        $(pic).addClass("visible")
      }
      else {
        $(pic).removeClass("visible")
      }
    }
}

export default scrollFade;