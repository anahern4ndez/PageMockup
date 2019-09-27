
import React from "react";
import css from '../style/images.css';
import Image from './images.jsx';

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.images = [
                '../images/radiantRaven.png', 
                '../images/kabeahParis.png' 
            ]
    }
    render(){
        return (
        <div>
            <Image link="https://studiolinear.com/Radiant-Raven" source={this.images[0]} />
            <Image link="https://studiolinear.com/Radiant-Raven" source="../images/kabeahParis.png" />
        </div>
        )
    }
}
