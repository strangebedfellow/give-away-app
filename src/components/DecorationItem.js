import React, { Component } from "react";
import decoration from '../assets/Decoration.svg';

export default class DecorationItem extends Component {
    render() {
        const { text } = this.props;
        return <>
        <div className='decoration'>
        <h1>{text}</h1>
            <p>
                <img src={decoration} alt="decoration"></img>
            </p>
        </div>
           
        </>
    }
}