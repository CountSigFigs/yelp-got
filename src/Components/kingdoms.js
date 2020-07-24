import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Badge } from './shared/badge';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Styles from './shared/styles';
import Ratings from 'react-ratings-declarative';
import { getAverageRating } from './utils';
import { Button } from './shared/form';

const { box } = Styles;

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
    const renderKingdoms = (kingdoms) => {
    
       if (kingdoms.length < 1) return <div style={{color:'red'}}>No houses returned. Try again. <br />(hint: search by  letters in the great seven houses. Ex: st)</div>
        // console.log(kingdoms[0].reviews[0].rating + kingdoms[0].reviews[0].rating )
        //console.log(totalNum);
        //add rating functionality to ratings component with jsx;
        return (kingdoms.map(({ id, name, region, sigil, reviews }) => (

            <Grid item xs={12} sm={6} md={4} key={id}>
                <Paper elevation={3} style={box}>
                    <Link to={`/kingdom/${id}`}>
                        <Ratings
                            rating={getAverageRating(reviews)}
                            widgetDimensions="40px"
                            widgetSpacings="10px"
                            style={{paddingTop:'5px'}}
                        >
                            <Ratings.Widget widgetRatedColor="rebeccapurple" widgetDimension='20px' />
                            <Ratings.Widget widgetRatedColor="rebeccapurple" widgetDimension='20px' />
                            <Ratings.Widget widgetRatedColor="rebeccapurple" widgetDimension='20px' />
                            <Ratings.Widget widgetRatedColor="rebeccapurple" widgetDimension='20px' />
                            <Ratings.Widget widgetRatedColor="rebeccapurple" widgetDimension='20px' />
                        </Ratings>
                        <p>
                            <img src={sigil} alt={name} width='50px' height='50px' /> <br /> {name} <br /> <Badge>{region}</Badge>
                        </p>
                    </Link>
                </Paper>
            </Grid>
        ))
        )
    };

    if (loading) return <p style={{ color: 'white' }}><i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>Loading...</p>;
    if (error) return <p style={{ color: 'white' }}>Error: {error.message}</p>

    return (
        <Box>
            <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                {renderKingdoms(newKingdoms || data.Great_Houses)}
            </Grid>
            {newKingdoms && 
                    <Button style={{ margin: '25px 0' }} onClick={() => newKingdoms = null}>
                    <i className="fas fa-arrow-left" style={{ marginRight: '2px' }}></i>Go Back
                    </Button>
            }
        </Box>
    )
}