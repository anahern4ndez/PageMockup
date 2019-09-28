
import React from "react";

function Text(props){

    const { f } = props; //font
    const { fs } = props; //font-size 
    const { text } = props; //text
    return(
        <div>
            <p style={{fontFamily: f, fontSize: fs}}>
                {text}
            </p>
        </div>
    )
}

export default Text;