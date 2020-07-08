import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import Kingdoms from './Components/kingdoms';
import Intro from './Components/intro';
import './index.css';
import Grid from '@material-ui/core/Grid';
import Styles from './Components/shared/styles';


const {intro} = Styles;

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://yelp-got.herokuapp.com/v1/graphql"
  })
})

const App = () => (
  <ApolloProvider client={client}>
  <div className='fullscreen'>
    <Grid container>
      <Grid item xs={12} sm={5} style={intro}>
        <Intro />
      </Grid>
      <Grid item sm={7} style={{backgroundColor:'#00203FFF'}}>
        <Kingdoms />
      </Grid>
    </Grid>
  </div>
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));
