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

const isActiveRoute = (location, path) => {
    return location.pathname.includes(path)
}

const useStyles = makeStyles(sidebarStyle);

function MiniDrawer({ open, onDrawerClose, routes, location }) {
    const classes = useStyles();
    const theme = useTheme();
    return (

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
                <IconButton onClick={onDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                {routes.map((route, index) => {
                    if (!route.label)
                        return null;
                    return (

                        <NavLink key={index} to={route.path}>
                            <ListItem button 
                                className={classNames(classes.listItem, {
                                    [classes.active]: isActiveRoute(location, route.path)
                                })}>
                                {route.icon ? <ListItemIcon>{<route.icon />}</ListItemIcon> : null}
                                <ListItemText primary={route.label} />
                            </ListItem>
                        </NavLink>
                    )
                })}
            </List>
        </Drawer>

    );
}

export default withRouter(MiniDrawer);
