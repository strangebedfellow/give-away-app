import React, { Component } from "react";

import aboutImg from '../assets/people.jpg';
import signature from '../assets/Signature.svg';
import decoration from '../assets/Decoration.svg';

export default class AboutUs extends Component {
    render() {
        return <>
            <section className='about-us' id='about'>
                <div className='signature'>
                    <div className='about-content'>
                        <h1>O nas</h1>
                        <p>
                            <img src={decoration} alt="decoration"></img>
                        </p>
                        <span>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</span>
                        <img src={signature} alt="signautre"></img>
                    </div>
                </div>
                <div className='people'>
                    <img src={aboutImg} alt="people"></img>
                </div>
            </section>
        </>
    }
}