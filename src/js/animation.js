const $ = require("jquery");

const scrollFade = () => {
  const pageTop = $(document).scrollTop();
  const pageBottom = pageTop + $(window).height();
  const imgs = $(".scroll-transition-fade");
  for (let i = 0; i < imgs.length; i++) {
    const pic = imgs[i];
    const pos = $(pic).offset().top - pageBottom;
    if (pos < 0) {
      $(pic).addClass("visible");
    } else {
      $(pic).removeClass("visible");
    }
  }
};

export default scrollFade;
