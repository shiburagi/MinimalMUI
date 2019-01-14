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
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import { Fade, Hidden, Paper, Popper, Typography } from '@material-ui/core';
import sidebarStyle from "assets/jss/components/sidebarStyle";

const isActiveRoute = (location, path) => {
    return location.pathname.includes(path)
}

function SidebarTooltip({ classes, open, anchorEl, text }) {
    return (<Popper className={classes.popper} open={open} anchorEl={anchorEl} placement={"right"} transition>
        {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
                <Paper className={classes.popperPaper} square>
                    <Typography className={classes.typography}>{text}</Typography>
                </Paper>
            </Fade>
        )}
    </Popper>)
}

const useStyles = makeStyles(sidebarStyle);

function Sidebar({ open, openMobile, onDrawerClose, routes, location }) {
    const classes = useStyles();
    const theme = useTheme();

    const [text, setText] = useState();
    const [anchorEl, setAnchorEl] = useState();
    const handleTooltipClose = () => {
        setAnchorEl(null);
        setText(null);
    }

    const renderList = (isMobile) => {
        return (<List disablePadding={true}>
            {routes.map((route, index) => {
                if (!route.label)
                    return null;
                return (
                    <NavLink key={index} to={route.path}
                        onClick={onDrawerClose("mobile")}>
                        <ListItem button
                            onMouseEnter={!isMobile && ((e) => {
                                setAnchorEl(e.currentTarget);
                                setText(route.label);
                            })}
                            onMouseLeave={!isMobile && handleTooltipClose}
                            className={classNames(classes.listItem, {
                                [classes.active]: isActiveRoute(location, route.path)
                            })}>
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
                    {renderList(false)}
                </Drawer>
                <SidebarTooltip classes={classes} open={Boolean(!open && anchorEl)}
                    text={text} anchorEl={anchorEl}
                    onClose={handleTooltipClose} />
            </Hidden>

            <Hidden mdUp>
                <Drawer
                    variant="temporary"
                    open={openMobile}
                    onClose={onDrawerClose("mobile")}
                >
                    <div className={classes.toolbar}>

                    </div>
                    {renderList(true)}
                </Drawer>
            </Hidden>
        </React.Fragment>

    );
}

Sidebar.propTypes = {
    open: PropTypes.bool,
    openMobile: PropTypes.bool,
    onDrawerClose: PropTypes.func,
    routes: PropTypes.array.isRequired,
};

export default withRouter(Sidebar);
