import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Intro from './intro';


export default function DisplayAppBar() {

  return (
      <AppBar position="static">
        <Toolbar>
            <Intro/>
        </Toolbar>
      </AppBar>
  );
}