import React from "react";
import "../style/bottomBar.css";
import Bubble from "./bubble";

function BottomBar() {
  return (
    <div id="bottom-nav">
      <div id="text-box" className="content_padding">
        <small>
          <a href="/">WORK</a>
        </small>
        <br />
        <br />
        <small>
          <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=inquiries@studiolinear.com">INQUIRIES@STUDIOLINEAR.COM</a>
        </small>
        <br />
        <small>
          <a href="tel:2079045525">(207) 904-5525</a>
        </small>
        <br />
        <div className="contact">
          <small>
            <a href="https://www.instagram.com/studiolinear/">IG</a>
          </small>
          {" "}
|
          <small>
            <a href="https://www.behance.net/studiolinear">BE</a>
          </small>
          {" "}
|
          <small>
            <a href="Blog" rel="history">NEWS</a>
          </small>
        </div>
      </div>
      <div id="say-hi">
        <Bubble />
      </div>
    </div>

  );
}

export default BottomBar;
