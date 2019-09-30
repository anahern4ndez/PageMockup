
import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/navbar.jsx";
import Gallery from "./components/gallery.jsx";
import BottomBar from "./components/bottomBar.jsx";
import Text from "./components/text.jsx";
import "./style/styles.css";
import Newsletter from "./components/newsletter.jsx";
import scrollFade from "./js/animation.js";

const $ = require("jquery");

$(document).on("scroll", () => {
  scrollFade();
});

class App extends React.Component {
  componentDidMount() {
    scrollFade();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Gallery number="1" />
        <BottomBar />
        <Text />
        <Gallery number="2" />
        <Newsletter />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector("#root"));
