
import React from "react";
import ReactDOM from "react-dom";
import Navbar from './components/navbar.jsx';
import Gallery from './components/gallery.jsx';
import BottomBar from './components/bottomBar.jsx';
import Text from './components/text.jsx';
import css from './style/styles.css';
import Newsletter from "./components/newsletter.jsx";

const $ = require('jquery');

$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  console.log("wh "+ $(window).height())
  var imgs = $(".scroll-transition-fade")
  for (var i = 0; i < imgs.length; i++) {
    var pic = imgs[i]
    const pos = $(pic).offset().top - $(document).scrollTop()
    if (pos < pageBottom) { 
      //console.log("pos " + pos + " pb " + pageBottom)
      $(pic).addClass("visible")
    }
    else {
      $(pic).removeClass("visible")
    }
  }
})

const App = () => {
  return (
    <div>
      <Navbar />
      <Gallery number="1"/>
      <BottomBar />
      <Text />
      <Gallery number="2"/>
      <Newsletter />
    </div>
  )
};


ReactDOM.render(<App />, document.querySelector("#root"));