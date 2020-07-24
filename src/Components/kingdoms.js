import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import RenderKingdoms from './renderKingdoms';

const KINGDOMS = gql`
    {
        Great_Houses(order_by: {name: asc}){
            id
            name
            region
            sigil
            reviews {
                rating
            }
        }
    }
`;

export default function Kingdoms({ newKingdoms }) {
    const { loading, error, data } = useQuery(KINGDOMS);
    
    if (loading) return <p style={{ color: 'white' }}><i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>Loading...</p>;
    if (error) return <p style={{ color: 'white' }}>Error: {error.message}</p>

    return (
        <Box>
            <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                <RenderKingdoms kingdoms={newKingdoms || data.Great_Houses}/>
            </Grid>
        </Box>
    )
};
