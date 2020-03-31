import React, { Component } from "react";
import {
    Link
} from 'react-router-dom';

import decoration from '../assets/Decoration.svg';
import icon1 from '../assets/Icon-1.svg';
import icon2 from '../assets/Icon-2.svg';
import icon3 from '../assets/Icon-3.svg';
import icon4 from '../assets/Icon-4.svg';


export default class SimpleSteps extends Component {
    render() {
        return <>
            <section className='simple-steps' id='steps'>
                <div>
                    <h1>Wystarczą 4 proste kroki</h1>
                    <p>
                        <img src={decoration} alt="decoration"></img>
                    </p>
                </div>

                <div className='steps'>
                    <div className='step'>
                        <img src={icon1} alt="icon1"></img>
                        <p>Wybierz rzeczy</p>
                        <hr width='40%'/>
                        <span>ubrania, zabawki, sprzęt i inne</span>
                    </div>
                    <div className='step'>
                        <img src={icon2} alt="icon2"></img>
                        <p>Spakuj je</p>
                        <hr width='40%'/>
                        <span>skorzystaj z worków na śmieci</span>
                    </div>
                    <div className='step'>
                        <img src={icon3} alt="icon3"></img>
                        <p>Zdecyduj komu chcesz pomóc</p>
                        <hr width='40%'/>
                        <span>wybierz zaufane miejsce</span>
                    </div>
                    <div className='step'>
                        <img src={icon4} alt="icon4"></img>
                        <p>Zamów kuriera</p>
                        <hr width='40%'/>
                        <span>kurier przyjedzie w dogodnym terminie</span>
                    </div>
                </div>

                <div>
                    <Link to='/login'><button><p>oddaj</p><p>rzeczy</p></button></Link>
                </div>
            </section>
        </>
    }
}