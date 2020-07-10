import React from 'react';
import styled from '@emotion/styled';

const LogoText = styled.h1`
    font-family: 'IM Fell English', serif;
    font-size: 5rem;
    color: 	black;
    margin: 0;    
`

const Logo = () => {
    return <LogoText>Game of Thrones: <br /> Yelp Edition</LogoText>;
}

export default Logo;
