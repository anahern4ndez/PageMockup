
import React from "react";
import css from '../style/images.css';


function Image(props){
    const { link } = props;
    const { source } = props;
    const { clickable } = props;
    const { metd } = props;
    const { x } = metd;
    const { y } = metd;
    const { w } = metd;
    const { z } = metd;
    return (
        <div className="img" style={{top: y + "vh", left: x + "vw", zIndex: z, height: "fit-content", bottom: "auto"}}>
            <a href={link}>
                <img src={source} clickable={clickable} style={{width: w + "vw"}}/>
            </a>
        </div>
    )
}

export default Image;
