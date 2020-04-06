import React, { Component } from "react";
import DecorationItem from './DecorationItem';

import {
    Link
} from 'react-router-dom';

export default class Register extends Component {
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
            <section className='login'>
                <div className='login-container'>
                    <DecorationItem text='Załóż konto' />
                    <form>
                        <label for="email">Email</label>
                        <input type='email' id='email'></input>
                        <label for="password">Hasło</label>
                        <input type='password' id='password'></input>
                        <label for="repeat-password">Powtórz hasło</label>
                        <input type='password' id='repeat-password'></input>
                    </form>
                    <div className='login-container-buttons'>
                        <Link to='/login'><button>Zaloguj się</button></Link>
                        <button>Załóż konto</button>
                    </div>
                </div>

            </section>

        </>
    }
}