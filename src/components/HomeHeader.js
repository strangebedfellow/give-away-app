import React, { Component } from "react";
import decoration from '../assets/Decoration.svg';

import HomeHeaderNavigation from './HomeHeaderNavigation';

import {
    Link
} from 'react-router-dom';

export default class HomeHeader extends Component {
    render() {
        return <>
            <section className='home-header'>
                <div className='top-menu'>
                    <div className='login'>
                        <ul>
                            <li><Link to='/login'>Zaloguj</Link></li>
                            <li><Link to='/register'>Załóż konto</Link></li>
                        </ul>
                    </div>
                    <HomeHeaderNavigation />
                </div>
                <div className='header-content'>
                    <div>
                        <h1>Zacznij pomagać!</h1>
                        <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                        <img src={decoration} alt="decoration"></img>
                        <span className='buttons'>
                            <Link to='/login'><button><p>oddaj</p><p>rzeczy</p></button></Link>
                            <Link to='/login'><button><p>zorganizuj</p><p>zbiórkę</p></button></Link>
                        </span>
                    </div>
                </div>
            </section>
        </>
    }
}
