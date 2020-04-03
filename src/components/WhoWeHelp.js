import React, { Component } from "react";

import decoration from '../assets/Decoration.svg';

export default class WhoWeHelp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            f: false,
            o: false,
            l: false
        }
    }

    handleClick = (e) => {
        this.setState({ [e.target.name]: true });
    }


    render() {
        const { f, o, l } = this.state;

        return <>
            <section className='who-we-help' id='help'>
                <h1>Komu pomagamy?</h1>
                <p>
                    <img src={decoration} alt="decoration"></img>
                </p>
                <div className='help-buttons'>
                    <button name='f' onClick={this.handleClick}>Fundacjom</button>
                    <button name='o' onClick={this.handleClick}>Organizacjom pozarządowym</button>
                    <button name='l' onClick={this.handleClick}>Lokalnym zbiórkom</button>
                </div>
                <div className='help-desc'>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
                </div>
                <div className='list'>
                    <div className='list-item'>
                        <div className='left-item'>
                            <h1>Zbiórka “Lorem Ipsum 1”</h1>
                            <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                        </div>
                        <div className='right-item'><p>Egestas, sed, tempus</p></div>
                    </div>
                    <hr />
                    <div className='list-item'>
                        <div className='left-item'>
                            <h1>Zbiórka “Lorem Ipsum 2”</h1>
                            <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                        </div>
                        <div className='right-item'><p>Ut, aliquam, purus, sit, amet</p></div>
                    </div>
                    <hr />
                    <div className='list-item'>
                        <div className='left-item'>
                            <h1>Zbiórka “Lorem Ipsum 3”</h1>
                            <p>Scelerisque in dictum non consectetur a erat nam.</p>
                        </div>
                        <div className='right-item'><p>Mi, quis, hendrerit, dolor</p></div>
                    </div>
                </div>
            </section>
        </>
    }
}