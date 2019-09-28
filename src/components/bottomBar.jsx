import React from "react";
import css from '../style/bottomBar.css';

import Bubble from "./bubble.jsx";

function BottomBar() {
    return(
        <div id="bottom-nav">
           <div id="text-box" className="content_padding">
               <small>
                   <a>WORK</a>
               </small><br/><br/>
               <small>
                   <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=inquiries@studiolinear.com" target="_blank">INQUIRIES@STUDIOLINEAR.COM</a>
               </small>
           </div>
            <div id="say-hi">
                <Bubble />
            </div>
        </div>
        
    )
}

export default BottomBar;