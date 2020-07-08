import React from 'react';
import { useQuery, gql } from '@apollo/client';
import {Badge} from './shared/badge';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Styles from './shared/styles';

const {box} = Styles;

const KINGDOMS = gql`
    {
        Great_Houses {
            name
            region
            sigil
        }
    }
`;

export default function Kingdoms() {
    const { loading, error, data } = useQuery(KINGDOMS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>

    return (
        <Box>
            <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                {data.Great_Houses.map(({id, name, region, sigil}) => (
                    <Grid item sm={6} md={4} key={name}>
                        <Paper style={box}>
                            <p>
                            <img src={sigil} alt={name} width='50px' height='50px'/> <br /> House {name} <Badge>{region}</Badge>
                            </p>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
            
        </Box>
    )
}