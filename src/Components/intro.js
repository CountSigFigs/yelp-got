import React from 'react';
import Logo from './shared/logo';

const image = require('./shared/images/tyrion.png');

const Intro = () => {
    return (
        <div style={{display:'flex', flexDirection:'row', alignItems:'center', padding:'10px' }}>
            <Logo />
            <img src={image} alt='angry Tryion' style={{height:'250px'}}/>
        </div>
    )
}

export default Intro;

