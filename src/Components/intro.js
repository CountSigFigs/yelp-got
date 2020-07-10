import React from 'react';
import Logo from './shared/logo';
import Styles from './shared/styles';
import Grid from '@material-ui/core/Grid';
import {Box} from '@material-ui/core';
const image = require('./shared/images/tyrion.png');

const { intro } = Styles;

const Intro = () => {
    return (
        <Box style={intro}>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12} md={4}>
                     <Logo />
                     <p><em> Tyrion demands satisfication!</em></p>
                </Grid>
                <Grid item xs={12} md={2}>
                    <img src={image} alt='angry Tryion' style={{height:'175px'}}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Intro;

