/* eslint-disable */
import { makeStyles } from "@material-ui/styles";
import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import dashboardRoutes from "../../routes/dashboard";
import { createRoutes } from "../../routes/utils";
import { CssBaseline, Typography, Hidden } from "../../../node_modules/@material-ui/core";
import Footer from "../../components/Footer/Footer";


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

const switchRoutes = createRoutes(dashboardRoutes, "16px 12px")
let previousLocation = {};
function App({location}) {
  const [open, setOpen] = useState();
  const [openMobile, setOpenMobile] = useState();
  const mainEl = useRef(null);

  useEffect(() => {
    if (previousLocation.pathname !== location.pathname)
      mainEl.current.scrollTop = 0
    previousLocation = location;
  });

  return (<div
    style={{
      display: 'flex',
      overflowY: "hidden"

    }}>
    <CssBaseline />
    <Hidden smDown>
      <Header collapse={open} onDrawerOpen={() => setOpen(true)} />
    </Hidden>
    <Hidden mdUp>
      <Header collapse={false} onDrawerOpen={() => setOpenMobile(true)} />
    </Hidden>
    <Sidebar open={open} openMobile={openMobile} onDrawerClose={(type) => () => type === "mobile" ? setOpenMobile(false) : setOpen(false)} routes={dashboardRoutes} />

    <div id="main-panel" ref={mainEl}
      style={{
        flexGrow: 1,
        height: "100vh",
        overflowX: "hidden",
        overflowY: "auto"
      }}>
      <main style={{
        minHeight: "calc(100% - 85px)"

      }}>
        <div style={{
          height: 64,

        }} />
        <div style={{
          flex: 1,

        }}>
          {switchRoutes}

        </div>

      </main>
      <Footer />
    </div>
  </div>)


}



export default App;