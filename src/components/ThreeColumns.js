import React, { Component } from "react";

export default class ThreeColumns extends Component {
    render() {
        return <>
            <section className='three-columns'>
                <div className='stat'>
                    <h1>10</h1>
                    <h2>ODDANYCH WORKÓW</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className='stat'>
                    <h1>5</h1>
                    <h2>WSPARTYCH ORGANIZACJI</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className='stat'>
                    <h1>7</h1>
                    <h2>ZORGANIZOWANYCH ZBIÓREK</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
            </section>
        </>
    }
}