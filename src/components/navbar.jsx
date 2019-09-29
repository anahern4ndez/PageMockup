
import React from "react";
import css from '../style/navbar.css';

export default class Navbar extends React.Component {
    render(){
        return (
        <div id="nav">
            <div grid-col="2" className="pad-2" style={{textAlign: "left"}}>
                <small>
                    <a href="https://studiolinear.com/About">ABOUT</a>
                </small>
            </div>
            <div grid-col="8" className="pad-2" >
                <a href="">
                    <img src="https://freight.cargo.site/w/1000/q/67/i/2301b15584f1c3162de88faeeebf527099a9daf57c7eb8baf9f7e783151a93bd/StudioLinearLogo.png"/>
                </a>
            </div>
            <div grid-col="2" className="pad-2" style={{textAlign: "right"}}>
                <small>
                    <a href="https://studiolinear.com/Services-1">SERVICES</a>
                </small>
            </div>
        </div>
        )
    }
}