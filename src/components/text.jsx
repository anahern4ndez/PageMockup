
import React from "react";
import "../style/styles.css";

function Text() {
  return (
    <div grid-row="true" grid-pad="0.5" grid-gutter="1" style={{ textAlign: "center" }}>
      <div grid-pad="0.5" style={{ textAlign: "center", width: "68%" }}>
        <br />
        <br />
        <br />
        <h1 style={{
          fontFamily: "HelveticaNeue-Light",
          fontSize: "1.63rem",
          letterSpacing: "-0.01em",
          lineHeight: "1.3",
          fontWeight: "400",
        }}
        >
          We are an award-winning, sister owned, women operated boutique creative
          agency based in the gorgeous state of Maine and the bustling metropolis of
          Minneapolis. We create brands, websites and lasting friendships built on
          creativity and a love for design.
        </h1>
        <h2>
          <a
            id="services"
            href="https://studiolinear.com/Services-1"
            rel="history"
            style={{
              fontFamily: "HelveticaNeue-Light",
              fontSize: "5.6rem",
              letterSpacing: "-0.01em",
              lineHeight: "1.4",
              fontWeight: "700",
            }}
          >
Services &gt;
          </a>
        </h2>
        <br />
      </div>
    </div>
  );
}

export default Text;
