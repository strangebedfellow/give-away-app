import React, { Component } from "react";
import DecorationItem from './DecorationItem';
import ValidateEmail from './ValidateEmail';
import {
    Link
} from 'react-router-dom';

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            password2: '',
            errors: {
                email: '',
                password: '',
                password2: ''
            },
            isValid: false
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { email, password, password2, errors } = this.state;
        !ValidateEmail(email) ? errors.email = 'Podany email jest nieprawidłowy!' : errors.email = '';
        password.length < 6 ? errors.password = 'Podane hasło jest za krótkie!' : errors.password = '';
        password2 !== password ? errors.password2 = 'Wpisane hasła się nie zgadzają!' : errors.password2 = '';
        this.setState({
            isValid: errors.email.length + errors.password.length + errors.password2.length
        })
    }

    render() {
        const { email, password, password2, errors, isValid } = this.state;

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
                        <label htmlFor="email">Email</label>
                        <input type='email' name='email' value={email} onChange={this.handleChange} id='email' style={errors.email.length > 0 ? { borderBottomColor: 'red' } : null}></input>
                        {errors.email.length > 0 && <span className='error-message'>{errors.email}</span>}
                        <label htmlFor="password">Hasło</label>
                        <input type='password' name='password' value={password} onChange={this.handleChange} id='password' style={errors.password.length > 0 ? { borderBottomColor: 'red' } : null}></input>
                        {errors.password.length > 0 && <span className='error-message'>{errors.password}</span>}
                        <label htmlFor="repeat-password">Powtórz hasło</label>
                        <input type='password' name='password2' value={password2} onChange={this.handleChange} id='repeat-password' style={errors.password2.length > 0 ? { borderBottomColor: 'red' } : null}></input>
                        {errors.password2.length > 0 && <span className='error-message'>{errors.password2}</span>}
                    </form>
                    <div className='login-container-buttons'>
                        <Link to='/login'><button>Zaloguj się</button></Link>
                        <button type='submit' onClick={this.handleSubmit}>Załóż konto</button>
                    </div>
                </div>
            </section>
        </>
    }
}