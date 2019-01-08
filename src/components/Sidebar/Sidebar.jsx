import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles, useTheme } from '@material-ui/styles';
import classNames from 'classnames';
import React from 'react';
import { NavLink, withRouter } from "react-router-dom";
import sidebarStyle from "../../assets/jss/components/sidebarStyle";
import { Hidden } from '../../../node_modules/@material-ui/core';

const isActiveRoute = (location, path) => {
    return location.pathname.includes(path)
}

const useStyles = makeStyles(sidebarStyle);

function MiniDrawer({ open,openMobile,  onDrawerClose, routes, location }) {
    const classes = useStyles();
    const theme = useTheme();

    const renderList=()=>{
        return (<List>
            {routes.map((route, index) => {
                if (!route.label)
                    return null;
                return (

                    <NavLink key={index} to={route.path}>
                        <ListItem button
                            className={classNames(classes.listItem, {
                                [classes.active]: isActiveRoute(location, route.path)
                            })}
                            onClick={onDrawerClose("mobile")}>
                            {route.icon ? <ListItemIcon>{<route.icon />}</ListItemIcon> : null}
                            <ListItemText primary={route.label} />
                        </ListItem>
                    </NavLink>
                )
            })}
        </List>)
    }
    return (
        <React.Fragment>
            <Hidden smDown>
                <Drawer
                    variant="permanent"
                    className={classNames(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: classNames({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                    open={open}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={onDrawerClose("desktop")}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    {renderList()}
                </Drawer>
            </Hidden>

            <Hidden mdUp>
                <Drawer
                    variant="temporary"
                    // classes={{
                    //     paper: classes.drawerOpen
                    // }}
                    open={openMobile}
                    onClose={onDrawerClose("mobile")}
                >
                    <div className={classes.toolbar}>
                      
                    </div>
                    {renderList()}
                </Drawer>
            </Hidden>
        </React.Fragment>

    );
}

export default withRouter(MiniDrawer);
