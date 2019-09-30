
import React from "react";
import "../style/images.css";


function Image(props) {
  const { link } = props;
  const { source } = props;
  const { clickable } = props;
  const { metd } = props;
  const { x } = metd;
  const { y } = metd;
  const { w } = metd;
  const { z } = metd;
  const { bp } = metd; // padding-bottom
  return (
    <div
      className="img"
      style={{
        top: `${y}vh`, left: `${x}vw`, zIndex: z, bottom: "auto", height: "fit-content",
      }}
    >
      <a href={link}>
        <div
          className="scroll-transition-fade"
          style={{
            paddingBottom: bp, top: `${y}%`, left: `${x}%`, zIndex: z, width: `${w}vw`,
          }}
        >
          <img src={source} clickable={clickable} style={{ width: `${w}vw` }} alt="" />
        </div>
      </a>
    </div>
  );
}

export default Image;
