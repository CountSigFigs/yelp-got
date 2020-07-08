import React from 'react';

const image = require('./shared/images/tyrion.png');

const Intro = () => {
    return (
        <div>
            <h1>Game of Thrones: <br /> Yelp Edition</h1>
            <img src={image} alt='angry Tryion' />
            <p><i>Tyrion demands sastification</i></p>
        </div>
    )
}

export default Intro;

