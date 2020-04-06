import React, { Component } from "react";

import decoration from '../assets/Decoration.svg';
import data from './WhoWeHelpData';

export default class WhoWeHelp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            f: data[2]
        }
    }

    handleClick = (e) => {
        this.setState({ f: data[e.target.name] });
    }

    render() {
        const { f } = this.state;

        return <>
            <section className='who-we-help' id='help'>
                <h1>Komu pomagamy?</h1>
                <p>
                    <img src={decoration} alt="decoration"></img>
                </p>
                <div className='help-buttons'>
                    <button name={0} onClick={this.handleClick}>Fundacjom</button>
                    <button name={1} onClick={this.handleClick}>Organizacjom pozarządowym</button>
                    <button name={2} onClick={this.handleClick}>Lokalnym zbiórkom</button>
                </div>
                <div className='help-desc'>
                    {f.description}
                </div>
                <div className='list'>
                    {f.items}
                </div>
            </section>
        </>
    }
}