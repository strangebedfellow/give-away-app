import React, { Component } from "react";

export default class Sendform extends Component {

    componentDidMount() {
        const { name, email, message } = this.props;
        const data = { name: name, email: email, message: message };
        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(resp => console.log(resp))
    }
    render() {
        return <span className='send-form-success'>Wiadomość została wysłana! Wkrótce się skontaktujemy. </span>
    }
}