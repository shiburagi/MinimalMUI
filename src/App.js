import { ThemeProvider } from '@material-ui/styles';
import defaultTheme from 'assets/theme/default';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import indexRoutes from "routes/index";
import { createRoutes } from "routes/utils";
import { connect } from "react-redux"
import { MuiThemeProvider } from '../node_modules/@material-ui/core';
import Customize from './views/Customize/Customize';

const UIThemeProvider = connect(state => ({
  theme: state.environment.theme,
  primaryColor: state.environment.primaryColor,
  secondaryColor: state.environment.secondaryColor,
}))(({ theme, children, primaryColor, secondaryColor }) =>
  <MuiThemeProvider theme={defaultTheme(theme, primaryColor,secondaryColor)}>
    <ThemeProvider theme={defaultTheme(theme, primaryColor,secondaryColor)}>
      {children}
    </ThemeProvider>
  </MuiThemeProvider>
)
function App(props) {
  return (
    <Router basename={window.location.hostname.includes("github") ? "/MinimalMUI" : "/"}>
      <UIThemeProvider>
        <React.Fragment>

          {createRoutes(indexRoutes)}

          <Customize />
        </React.Fragment >
      </UIThemeProvider>
    </Router>

  );
}

export default App;
