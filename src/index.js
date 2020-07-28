import React from "react";
import { render } from "react-dom";
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import {getMainDefinition} from '@apollo/client/utilities';
import {WebSocketLink} from '@apollo/link-ws';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import KingdomSearch from './Components/kingdomSearch';
import KingdomLoader from './Components/Kingdom';
import Intro from './Components/intro';
import './index.css';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Styles from './Components/shared/styles';

const {kingdom, container, fullscreen} = Styles;
const GRAPHQL_ENDPOINT = "yelp-got.herokuapp.com/v1/graphql";

const httpLink = new HttpLink({
  uri: `http://${GRAPHQL_ENDPOINT}`
})

const wsLink = new WebSocketLink({
  uri: `ws://${GRAPHQL_ENDPOINT}`,
  options:{
    reconnect: true
  }
})

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' && 
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink
})

const App = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Box style={fullscreen}>
        <Intro />
        <Grid container style={container}>
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
