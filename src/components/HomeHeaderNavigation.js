import React, { Component } from "react";

import { Link } from "react-scroll";

export default class HomeHeaderNavigation extends Component {

    render() {
        return <>
            <div className='navigation'>
                <ul>
                    <li>Start</li>
                    <li><Link to="simple-steps">O co chodzi?</Link></li>
                    <li><Link to="about">O nas</Link></li>
                    <li><Link to="foundation">Fundacja i organizacje</Link></li>
                    <li><Link to="contact">Kontakt</Link></li>
                </ul>
            </div>
        </>
    }
}
