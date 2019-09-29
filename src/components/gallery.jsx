
import React from "react";
import css from '../style/gallery.css';
import Image from './images.jsx';

//primera galeria 
import radiantRaven from "../images/radiantRaven.png";
import kaveahParis from "../images/kabeahParis.png";
import bwhotel from "../images/bwhotel.png";
import mdPure from "../images/mdPure.png";
import muffinStudio from "../images/muffinStudio.png";
import honeyCan from "../images/honeyCan.png";
import work from "../images/work.png";
import ribbon from "../images/aww_bribbon.png";

//segunda galeria
import clipboard from "../images/kingsMountain.png";
import wulfkitty from "../images/wulfKitty.png";
import twinleaf from "../images/twinleaf.png";
import kingsMountain from "../images/kingswood.png";
import collage from "../images/collage.png";
import remedies from "../images/gardenRemedies.png";
import phones from "../images/phones.png";
import noova from "../images/noova.png";
import coffees from "../images/coffees.png";
import bandit from "../images/bandit.png";
import breakf from "../images/pastry.png";
import play from "../images/play.png";

function Gallery(props){
    const { number } = props;
    if(number === "1"){
        return (
            <div className="gallery" number={number}>
                <Image link="https://studiolinear.com/Radiant-Raven" source={radiantRaven} clickable="true" metd={{w: 40, x: 2.8, y: 1.5, z:"1"}}/>
                <Image link="https://studiolinear.com/Kabeah-Paris" source={kaveahParis} clickable="true" metd={{w: 37.5, x: 60.3, y: 19.8, z: "1"}}/>
                <Image source={work} metd={{w: 27.5, x: -2.2, y: 74.6, z: "2"}}/>
                <Image link="https://studiolinear.com/North-Country" source={honeyCan} clickable="true" metd={{w: 45, x: -4.7, y: 88.2, z: "1"}}/>
                <Image link="https://studiolinear.com/Muffin-Studio" source={muffinStudio} clickable="true" metd={{w: 40, x: 47.8, y: 129.29, z: "1"}}/>
                <Image link="https://studiolinear.com/Brentwood-Resort" source={bwhotel} clickable="true" metd={{w: 27.5, x: 2.8, y: 225.1, z: "2"}}/>
                <Image link="https://studiolinear.com/MD-Pure" source={mdPure} clickable="true" metd={{w: 57.5, x: 20.3, y: 247.9, z: "1"}}/>
                <Image link="https://studiolinear.com/Awwwards-Honorable-Mention" source={ribbon} clickable="true" metd={{w: 7.5, x: 90.25, y: 1.5, z: "2"}}/>
            </div>
        )
    }
    else if(number === "2"){
        return(
            <div className="gallery" number={number}>
                <Image link="https://studiolinear.com/Kings-Mountain" source={clipboard} clickable="true" metd={{w: 32.5, x: 2.75, y: 6.5, z:"1"}}/>
                <Image link="https://studiolinear.com/Wulf-Kitty" source={wulfkitty} clickable="true" metd={{w: 72.5, x: 42.75, y: 11.1, z: "1"}}/>
                <Image link="https://studiolinear.com/Twinleaf" source={twinleaf} clickable="true" metd={{w: 27.5, x: 5.3, y: 79.5, z: "1"}}/>
                <Image source={kingsMountain} metd={{w: 100, x: -2.2, y: 112.95, z: "1"}}/>
                <Image source={collage} metd={{w: 60.73, x: -13.95, y: 239, z: "-1"}}/>
                <Image link="https://studiolinear.com/Garden-Remedies" source={remedies} clickable="true" metd={{w: 57.23, x: 47.99, y: 239.8, z: "1"}}/>
                <Image link="https://studiolinear.com/Provender" source={phones} clickable="true" metd={{w: 90.2, x: 1.47, y: 314, z: "1"}}/>
                <Image source={noova} metd={{w: 60.25, x: -5.1, y: 423.85, z: "1"}}/>
                <Image link="https://studiolinear.com/Notes-Coffee-Co" source={coffees} clickable="true" metd={{w: 54.82, x: 43.86, y: 427.64, z: "1"}}/>
                <Image link="https://www.banditedit.com/" source={bandit} clickable="true" metd={{w: 30.88, x: 5.6, y: 509.8, z: "1"}}/>
                <Image link="https://open.spotify.com/playlist/5bRaJikAE9s87JunK2gFco?si=uHGlUeGySUu0MKhuqSt2JA" source={play} clickable="true" metd={{w: 9.881673675956947, x: 15.88, y: 552.6, z: "1"}}/>
                <Image source={breakf} metd={{w: 47.18, x: 52.25, y: 515, z: "1"}}/>
            </div>
        )
    }
}
export default Gallery;

