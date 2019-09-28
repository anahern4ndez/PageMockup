
import React from "react";
import css from '../style/gallery.css';
import Image from './images.jsx';

import radiantRaven from "../images/radiantRaven.png";
import kaveahParis from "../images/kabeahParis.png";
import bwhotel from "../images/bwhotel.png";
import mdPure from "../images/mdPure.png";
import muffinStudio from "../images/muffinStudio.png";
import honeyCan from "../images/honeyCan.png";
import work from "../images/work.png";
import ribbon from "../images/aww_bribbon.png";

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div id="gallery" data-content-accomodated="true">
                <Image link="https://studiolinear.com/Radiant-Raven" source={radiantRaven} clickable="true" metd={{w: 40, x: 5, y: 0, z:"1"}}/>
                <Image link="https://studiolinear.com/Kabeah-Paris" source={kaveahParis} clickable="true" metd={{w: 37.5, x: 62.5, y: 10, z: "2"}}/>
                <Image source={work} metd={{w: 27.5, x: 0, y: 40, z: "3"}}/>
                <Image link="https://studiolinear.com/North-Country" source={honeyCan} clickable="true" metd={{w: 45, x: -2.5, y: 47.5, z: "2"}}/>
                <Image link="https://studiolinear.com/Muffin-Studio" source={muffinStudio} clickable="true" metd={{w: 40, x: 50, y: 70, z: "5"}}/>
                <Image link="https://studiolinear.com/Brentwood-Resort" source={bwhotel} clickable="true" metd={{w: 27.5, x: 5, y: 122.5, z: "6"}}/>
                <Image link="https://studiolinear.com/MD-Pure" source={mdPure} clickable="true" metd={{w: 57.5, x: 22.5, y: 135, z: "7"}}/>
                <Image link="https://studiolinear.com/Awwwards-Honorable-Mention" source={ribbon} clickable="true" metd={{w: 7.5, x: 92.5, y: 0, z: "8"}}/>
                <div style={{position: "relative", height: "1px"}}></div>
            </div>
        )
    }
}
