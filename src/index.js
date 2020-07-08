import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import Kingdoms from './Components/kingdoms';
import Intro from './Components/intro';
import './index.css';
import Grid from '@material-ui/core/Grid';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://yelp-got.herokuapp.com/v1/graphql"
  })
})

const App = () => (
  <ApolloProvider client={client}>
  <div class='fullscreen'>
    <Grid container>
      <Grid item xs={12} sm={6} style={{backgroundColor:'#4287f5', display:'flex', justifyContent:'center', textAlign:'center'}}>
        <Intro />
      </Grid>
      <Grid item sm={6}>
        <Kingdoms />
      </Grid>
    </Grid>
  </div>
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));
