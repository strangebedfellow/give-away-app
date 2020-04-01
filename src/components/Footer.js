import React, { Component } from "react";
import DecorationItem from "./DecorationItem";

export default class Footer extends Component {
    render() {
        return <>
            <section className='footer' id='contact'>
                <div className='contact'>
                    <DecorationItem text='Skontaktuj się z nami' />
                    <form id="usrform">
                        <div>
                            Wpisz swoje imię
                        <input name='name' type='text' value='Krzysztof' ></input>
                        </div>
                        <div>
                            Wpisz swój email
                        <input name='email' type='email' value='abc@xyz.pl'></input>
                        </div>
                    </form>
                    <p>Wpisz swoją wiadomość</p>
                    <textarea name="message" form="usrform">Enter text here...</textarea>
                </div>
            </section>
        </>
    }
}