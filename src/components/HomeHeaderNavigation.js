import React, { Component } from "react";

import { Link } from "react-scroll";

export default class HomeHeaderNavigation extends Component {

    render() {
        return <>
            <div className='navigation'>
                <ul>
                    <li>Start</li>
                    <li><Link to="steps" smooth={true} duration={200}>O co chodzi?</Link></li>
                    <li><Link to="about" smooth={true} duration={200}>O nas</Link></li>
                    <li><Link to="help" smooth={true} duration={200}>Fundacja i organizacje</Link></li>
                    <li><Link to="contact" smooth={true} duration={200}>Kontakt</Link></li>
                </ul>
            </div>
        </>
    }
}
