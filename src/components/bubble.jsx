import React from "react";
import "../style/bubble.css";

import bubbleimg from "../images/bubble.png";

function Bubble() {
  return (
    <div id="bubble">
      <a href="https://studiolinear.as.me/schedule.php">
        <img src={bubbleimg} alt="say hi" />
      </a>
    </div>
  );
}

export default Bubble;
