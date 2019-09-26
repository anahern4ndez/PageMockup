
import React from "react";
import css from '../css/styles.css';

export default class Navbar extends React.Component {
    render(){
        return (
        <div id="nav">
            <ul>
                <li>
                    <a href="https://studiolinear.com/About">ABOUT</a>
                </li>
                <li>
                    <img src="https://freight.cargo.site/w/1000/q/67/i/2301b15584f1c3162de88faeeebf527099a9daf57c7eb8baf9f7e783151a93bd/StudioLinearLogo.png"/>
                </li>
                <li>
                    <a href="https://studiolinear.com/Services-1">SERVICES</a>
                </li>
            </ul>
        </div>
        )
    }
}