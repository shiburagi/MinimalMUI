/* eslint-disable */
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import dashboardRoutes from "../../routes/dashboard";
import { createRoutes } from "../../routes/utils";
import { CssBaseline, Typography } from "../../../node_modules/@material-ui/core";


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  }
}));

const switchRoutes = createRoutes(dashboardRoutes)

function App() {
  // const classes = useStyles();
  const [open, setOpen] = useState();
  return (<div style={{
    display: 'flex',
  }}>
    <CssBaseline />

    <Header collapse={open} onDrawerOpen={() => setOpen(true)} />
    <Sidebar open={open} onDrawerClose={() => setOpen(false)} routes={dashboardRoutes} />

    <main style={{
      flexGrow: 1,
      padding: 16,
      overflowX:"hidden"
    }}>
      <div style={{
        height: 80
      }} />
      <div>
        {switchRoutes}
      </div>

    </main>
  </div>)


}



export default App;