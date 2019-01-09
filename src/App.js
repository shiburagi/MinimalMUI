import { ThemeProvider } from '@material-ui/styles';
import defaultTheme from 'assets/theme/default';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import indexRoutes from "routes/index";
import { createRoutes } from "routes/utils";
import { MuiThemeProvider } from '../node_modules/@material-ui/core';


function App(props) {
  return (


    <Router basename="/">
      <MuiThemeProvider theme={defaultTheme()}>
        <ThemeProvider theme={defaultTheme()}>
          {createRoutes(indexRoutes)}
        </ThemeProvider>
      </MuiThemeProvider>
    </Router>


  );
}

export default App;
