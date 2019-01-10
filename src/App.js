import { ThemeProvider } from '@material-ui/styles';
import defaultTheme from 'assets/theme/default';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import indexRoutes from "routes/index";
import { createRoutes } from "routes/utils";
import { connect } from "react-redux"
import { MuiThemeProvider } from '../node_modules/@material-ui/core';

const UIThemeProvider = connect(state => ({
  theme: state.environment.theme
}))(({ theme, children }) =>
  <MuiThemeProvider theme={defaultTheme(theme)}>
    <ThemeProvider theme={defaultTheme(theme)}>
      {children}
    </ThemeProvider>
  </MuiThemeProvider>
)
function App(props) {
  return (
    <Router basename={window.location.hostname.includes("github") ? "/MinimalMUI" : "/"}>
      <UIThemeProvider>
        {createRoutes(indexRoutes)}
      </UIThemeProvider>
    </Router>
  );
}

export default App;
