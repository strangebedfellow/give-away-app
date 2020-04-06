import React from 'react';

const data = [
    { description: <span>FUNDACJOM</span> },
    { description: <span>ORGANIZACJOM</span> },
    {
        description: <span>LOKALNYM ZBIÓRKOM</span>,
        items: <>
            <div className='list-item'>
                <div className='left-item'>
                    <h1>Zbiórka “Lorem Ipsum 1”</h1>
                    <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                </div>
                <div className='right-item'><p>Egestas, sed, tempus</p></div>
            </div>
            <hr />
            <div className='list-item'>
                <div className='left-item'>
                    <h1>Zbiórka “Lorem Ipsum 2”</h1>
                    <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                </div>
                <div className='right-item'><p>Ut, aliquam, purus, sit, amet</p></div>
            </div>
            <hr />
            <div className='list-item'>
                <div className='left-item'>
                    <h1>Zbiórka “Lorem Ipsum 3”</h1>
                    <p>Scelerisque in dictum non consectetur a erat nam.</p>
                </div>
                <div className='right-item'><p>Mi, quis, hendrerit, dolor</p></div>
            </div>
        </>
    }
];

export default data;