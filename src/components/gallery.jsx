
import React from "react";
import css from '../style/images.css';
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
        <div>
            <Image link="https://studiolinear.com/Radiant-Raven" source={radiantRaven} />
            <Image link="https://studiolinear.com/Kabeah-Paris" source={kaveahParis} />
            <Image source={work} />
            <Image link="https://studiolinear.com/North-Country" source={honeyCan} />
            <Image link="https://studiolinear.com/Muffin-Studio" source={muffinStudio} />
            <Image link="https://studiolinear.com/Brentwood-Resort" source={bwhotel} />
            <Image link="https://studiolinear.com/MD-Pure" source={mdPure} />
        </div>
        )
    }
}
