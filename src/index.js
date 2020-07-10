import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import KingdomSearch from './Components/kingdomSearch';
import KingdomLoader from './Components/Kingdom';
import Intro from './Components/intro';
import './index.css';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Styles from './Components/shared/styles';

const {intro, kingdom, container, fullscreen} = Styles;

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://yelp-got.herokuapp.com/v1/graphql"
  })
})

const App = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Box style={fullscreen}>
        <Grid container style={container}>
          <Grid item xs={12} style={intro}>
            <Intro />
          </Grid>
          <Grid item sm={12} style={kingdom}>
            <Switch>
              <Route path='/kingdom/:id' component={KingdomLoader} />
              <Route path='/' component={KingdomSearch} />
            </Switch>
          </Grid>
        </Grid>
      </Box>
    </ApolloProvider>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
