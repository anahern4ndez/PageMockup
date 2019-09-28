
import React from "react";
import css from '../style/images.css';


function Image(props){
    const { link } = props;
    const { source } = props;
    const { clickable } = props;
    const { metd } = props;
    const { x } = metd;
    let { y } = metd;
    let _y = "auto";
    const { w } = metd;
    const { z } = metd;
    if (y === -1){
        y = "auto"
        _y = 0
    }
    else{
        y += "vh"
    }
    return (
        <div className="img" style={{top: y, left: x + "vw", zIndex: z, height: "fit-content", bottom: _y}}>
            <a href={link}>
                <img src={source} clickable={clickable} style={{width: w + "vw"}}/>
            </a>
        </div>
    )
}

export default Image;
