import React, { Component } from "react";
import DecorationItem from "./DecorationItem";
import facebook from '../assets/Facebook.svg';
import instagram from '../assets/Instagram.svg';
import SendForm from './SendForm';
import ValidateEmail from './ValidateEmail';

export default class Footer extends Component {

    constructor() {
        super();
        this.state = {
            message: '',
            name: '',
            email: '',
            errors: {
                name: '',
                email: '',
                message: ''
            },
            valid: false
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { message, name, email, errors } = this.state;
        message.length < 120 ? errors.message = 'Wiadomość musi mieć co najmniej 120 znaków' : errors.message = '';
        (/\s/g.test(name) || name.length < 1) ? errors.name = 'Podane imię jest nieprawidłowe!' : errors.name = '';
        !ValidateEmail(email) ? errors.email = 'Podany email jest nieprawidłowy!' : errors.email = '';
        this.setState({
            valid: errors.message.length + errors.name.length + errors.email.length,
            name: '',
            email: '',
            message: ''
        })
    }

    render() {
        const { message, name, email, errors, valid } = this.state;
        return <>
            <section className='footer' id='contact'>
                <div className='contact'>
                    <DecorationItem text='Skontaktuj się z nami' />
                    {(valid === 0) ? <SendForm name={name} email={email} message={message} /> : null}
                    <form id="usrform">
                        <div>
                            Wpisz swoje imię
                        <input name='name' type='text' value={name} onChange={this.handleChange} placeholder='Krzysztof' style={errors.name.length > 0 ? { borderBottomColor: 'red' } : null}></input>
                            {errors.name.length > 0 && <span className='error-message'>{errors.name}</span>}
                        </div>
                        <div>
                            Wpisz swój email
                        <input name='email' type='email' value={email} onChange={this.handleChange} placeholder='abc@xyz.pl' style={errors.email.length > 0 ? { borderBottomColor: 'red' } : null}></input>
                            {errors.email.length > 0 && <span className='error-message'>{errors.email}</span>}
                        </div>
                    </form>
                    <div className='message'>
                        Wpisz swoją wiadomość
                    <textarea name="message" id='message' value={message} onChange={this.handleChange} placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' style={errors.message.length > 0 ? { borderBottomColor: 'red' } : null}></textarea>
                        {errors.message.length > 0 && <span className='error-message'>{errors.message}</span>}
                    </div>
                    <div id='send'>
                        <button type='submit' onClick={this.handleSubmit}>Wyślij</button>
                    </div>
                </div>
                <div className='footer-bottom'>
                    Copyright
                </div>
                <div className='footer-social'>
                    <img src={facebook} alt="facebook"></img>
                    <img src={instagram} alt="instagram"></img>
                </div>
            </section>
        </>
    }
}