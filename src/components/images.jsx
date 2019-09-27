
import React from "react";
import css from '../style/images.css';


export default class Image extends React.Component {
    render(){
        return (
        <div>
            <a href={this.props.link}>
                <img src={this.props.source}/>
            </a>
        </div>
        )
    }
}



//https://freight.cargo.site/w/1110/q/94/i/a9c18cdc6329ca0403c1be85fdd9348162ce71f8951e042b54a1ebc6f82e926f/Screen-Shot-2019-08-15-at-10.02.25-AM.png