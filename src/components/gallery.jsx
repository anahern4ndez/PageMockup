
import React from "react";
import css from '../style/gallery';
import Image from './images.jsx';

import radiantRaven from "../images/radiantRaven.png";
import kaveahParis from "../images/kabeahParis.png";
import bwhotel from "../images/bwhotel.png";
import mdPure from "../images/mdPure.png";
import muffinStudio from "../images/muffinStudio.png";
import honeyCan from "../images/honeyCan.png";
import work from "../images/work.png";

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
        <div id="gallery">
            <Image link="https://studiolinear.com/Radiant-Raven" source={radiantRaven} clickable="true"/>
            <Image link="https://studiolinear.com/Kabeah-Paris" source={kaveahParis} clickable="true"/>
            <Image source={work} clickable="false"/>
            <Image link="https://studiolinear.com/North-Country" source={honeyCan} clickable="true"/>
            <Image link="https://studiolinear.com/Muffin-Studio" source={muffinStudio} clickable="true"/>
            <Image link="https://studiolinear.com/Brentwood-Resort" source={bwhotel} clickable="true"/>
            <Image link="https://studiolinear.com/MD-Pure" source={mdPure} clickable="true"/>
        </div>
        )
    }
}
