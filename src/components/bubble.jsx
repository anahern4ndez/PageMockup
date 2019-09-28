import React from "react";
import css from '../style/bubble.css';

import bubbleimg from "../images/bubble.png";

function Bubble() {
    return(
        <div id="bubble">
            <a>
                <img src={bubbleimg}/>
            </a>
        </div>
    )
}

export default Bubble;