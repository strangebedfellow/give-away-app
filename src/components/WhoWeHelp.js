import React, { Component } from "react";
import decoration from '../assets/Decoration.svg';
import data from './WhoWeHelpData';

export default class WhoWeHelp extends Component {
    constructor() {
        super();
        this.state = {
            organizations: data[0],
            pagination: data[0].listItems,
            active: 0,
            currentPage: 1,
            itemsPerPage: 3
        }
    }

    handleClick = (e) => {
        this.setState({
            organizations: data[e.target.name],
            active: e.target.name,
            pagination: data[e.target.name].listItems,
            currentPage: 1,
            itemsPerPage: 3
        });
    }

    handlePages = (event, i) => {
        this.setState({ currentPage: i })
    }

    render() {
        const { organizations, active, pagination, currentPage, itemsPerPage } = this.state;
        const indexOfLast = currentPage * itemsPerPage;
        const indexOfFirst = indexOfLast - itemsPerPage;
        const currentNames = pagination.slice(indexOfFirst, indexOfLast);
        const elements = currentNames.map((item, i) => {
            return <div key={i} className='list-item'>{item}</div>
        })
        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(pagination.length / itemsPerPage); i++) {
            const element = <li key={i} onClick={e => this.handlePages(e, i)}> {i} </li>
            pageNumbers.push(element)
        }

        return <>
            <section className='who-we-help' id='help'>
                <h1>Komu pomagamy?</h1>
                <p>
                    <img src={decoration} alt="decoration"></img>
                </p>
                <div className='help-buttons'>
                    <button name={0} className={active === 0 ? 'btn-active' : ''} onClick={this.handleClick}>Fundacjom</button>
                    <button name={1} className={active === 1 ? 'btn-active' : ''} onClick={this.handleClick}>Organizacjom pozarządowym</button>
                    <button name={2} className={active === 2 ? 'btn-active' : ''} onClick={this.handleClick}>Lokalnym zbiórkom</button>
                </div>
                <div className='help-desc'>
                    {organizations.description}
                </div>
                <div className='list'>
                    {elements}
                </div>
                <ul className='numbers'>
                    {pageNumbers.length > 1 ? pageNumbers : null}
                </ul>
            </section>
        </>
    }
}