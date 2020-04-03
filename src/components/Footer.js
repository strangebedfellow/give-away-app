import React, { Component } from "react";
import DecorationItem from "./DecorationItem";

import facebook from '../assets/Facebook.svg';
import instagram from '../assets/Instagram.svg';

export default class Footer extends Component {
    render() {
        return <>
            <section className='footer' id='contact'>
                <div className='contact'>
                    <DecorationItem text='Skontaktuj się z nami' />
                    <form id="usrform">
                        <div>
                            Wpisz swoje imię
                        <input name='name' type='text' placeholder='Krzysztof'></input>
                        </div>
                        <div>
                            Wpisz swój email
                        <input name='email' type='email' placeholder='abc@xyz.pl'></input>
                        </div>
                    </form>
                    <div className='message'>
                        Wpisz swoją wiadomość
                    <textarea name="message" id='message' placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'></textarea>
                    </div>
                    <div id='send'>
                        <button>Wyślij</button>
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