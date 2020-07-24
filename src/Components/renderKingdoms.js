import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from './shared/badge';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Ratings from 'react-ratings-declarative';
import { getAverageRating } from './utils';
import Styles from './shared/styles';

const { box } = Styles;

function RenderKingdoms({kingdoms}){
    
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

 export default RenderKingdoms;
