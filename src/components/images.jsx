
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
    const { bp } = metd; //padding-bottom
    /*if (y === -1){
        y = "auto"
        _y = 0
    }
    else{
        y += "vh"
    }*/
    return (
        <div className="img" style={{top: y + "vh", left: x + "vw", zIndex: z, bottom: _y, height: "fit-content"}}>
            <a href={link}>
                <div className="scroll-transition-fade" style={{paddingBottom: bp, top: y + "%", left: x + "%", zIndex: z, width: w + "vw"}}>
                    <img src={source} clickable={clickable} style={{width: w + "vw"}}/>
                </div>
            </a>
        </div>
    )
}

export default Image;
