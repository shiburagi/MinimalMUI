import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles, useTheme } from '@material-ui/styles';
import classNames from 'classnames';
import React from 'react';
import { CirclePicker as ColorPicker } from 'react-color';
import { connect } from "react-redux";
import { Button, Typography } from '../../../node_modules/@material-ui/core';
import { changePrimaryColor, changeSecondaryColor, changeTheme, changeToolbarColor } from "../../actions";
import { primaryColor, secondaryColor } from '../../assets/jss';

const drawerWidth = 360;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        position: "fixed",
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    paper: {
        boxShadow: theme.shadows[3],
        top: "140px",
        height: "480px",
        border: "1px solid " + theme.palette.divider,
        overflowY: "hidden",
        maxHeight: "60vh"

    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 5,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 5,
        },
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
}));

function Customize({ _theme, toolbarColor, primaryColor, secondaryColor, dispatch }) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />

            <Drawer
                anchor="right"
                variant="permanent"
                className={classNames(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: classNames(classes.paper, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
                open={open}
            >
                <div style={{
                    display: "flex",
                    height: "inherit"
                }}>
                    <div style={{
                        height: "100%",
                        display: "inline-block", borderRight: "1px solid " + theme.palette.divider
                    }}>
                        <Button
                            onClick={
                                open ? handleDrawerClose : handleDrawerOpen
                            }
                            style={{
                                margin: "auto",
                                height: "inherit",
                                padding: 8,
                                minWidth: 0
                            }} >
                            {open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </Button>
                    </div>
                    <div style={{
                        padding: 16,
                        paddingBottom: 48,
                        overflowY: "auto"
                    }}>
                        <Typography variant="subtitle1">Theme</Typography>
                        <div style={{ display: "flex" }}>
                            <ToggleButtonGroup value={_theme} exclusive
                                onChange={(e, theme) => dispatch(changeTheme(theme))}>
                                <ToggleButton value="light">
                                    Light
                            </ToggleButton>
                                <ToggleButton value="dark">
                                    Night
                            </ToggleButton>
                            </ToggleButtonGroup>
                        </div>

                        <br />
                        <Typography variant="subtitle1">App Bar Color</Typography>
                        <div style={{ display: "flex" }}>
                            <ToggleButtonGroup value={toolbarColor} exclusive
                                onChange={(e, toolbarColor) => dispatch(changeToolbarColor(toolbarColor))}>
                                <ToggleButton value="inherit">
                                    inherit
                            </ToggleButton>
                                <ToggleButton value="primary">
                                    primary
                            </ToggleButton>
                                <ToggleButton value="secondary">
                                    secondary
                            </ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                        <br />
                        <Typography variant="subtitle1">Primary Color</Typography>
                        <ColorPicker color={primaryColor} onChange={({ hex }) => {
                            dispatch(changePrimaryColor(hex))
                        }} />
                        <br />

                        <Typography variant="subtitle1">Secondary Color</Typography>
                        <ColorPicker color={secondaryColor} onChange={({ hex }) => {
                            dispatch(changeSecondaryColor(hex))
                        }} />
                        <Button color="secondary" variant="contained" onClick={e=>{
                            dispatch(changeTheme());
                            dispatch(changeToolbarColor());
                            dispatch(changePrimaryColor())
                            dispatch(changeSecondaryColor());
                        }} style={{
                            left: theme.spacing.unit * 5 + 1,
                            position: "absolute",
                            borderRadius: 0,
                            bottom: 0,
                            right: 0,
                            width: `calc(100% - ${theme.spacing.unit * 5 + 1}px)`
                        }}>Reset</Button>

                    </div>
                </div>
            </Drawer>

        </div >
    );
}

export default connect(state => ({
    _theme: state.environment.theme,
    toolbarColor: state.environment.toolbarColor,
    primaryColor: state.environment.primaryColor ? state.environment.primaryColor : primaryColor,
    secondaryColor: state.environment.secondaryColor ? state.environment.secondaryColor : secondaryColor,

}))(Customize);
