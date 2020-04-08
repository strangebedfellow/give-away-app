import React, { Component } from "react";
import DecorationItem from './DecorationItem';

import {
    Link
} from 'react-router-dom';

export default class Login extends Component {
    render() {
        return <>
            <div className='top-menu'>
                <div className='home-header-login'>
                    <ul>
                        <li><Link to='/login'>Zaloguj</Link></li>
                        <li><Link to='/register'>Załóż konto</Link></li>
                    </ul>
                </div>
                <div className='navigation'>
                    <ul>
                        <Link to='/'><li>Start</li></Link>
                        <li>O co chodzi?</li>
                        <li>O nas</li>
                        <li>Fundacja i organizacje</li>
                        <li>Kontakt</li>
                    </ul>
                </div>
            </div>
            <section className='logout'>
                <div className='logout-container'>
                    <DecorationItem text='Wylogowanie nastąpiło pomyślnie!' />
                    <div className='logout-container-buttons'>
                        <Link to='/'><button>Strona główna</button></Link>
                    </div>
                </div>

            </section>

        </>
    }
}