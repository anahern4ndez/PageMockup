import React from 'react';
import css from '../style/newsletter.css';

function Newsletter(){
    return(
        <div id="news" className="content_padding">
            <div id="info">
                <small>JOIN OUR GROOVY NEWSLETTER</small>
                <input type="email" id="email" placeholder=""></input>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <input type="submit" value="LET'S BOOGIE" id="mc-embedded-subscribe" className="button"></input>
            </div>
        </div>
    )
}

export default Newsletter;