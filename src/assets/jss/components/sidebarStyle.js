import { drawerWidth } from "../index"
import { fade } from "@material-ui/core/styles/colorManipulator";
export default (theme => {
    const secondaryColor = theme.palette.secondary.main
    return {

        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginLeft: 12,
            marginRight: 36,
        },
        hide: {
            display: 'none',
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
            width: theme.spacing.unit * 7 + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing.unit * 9 + 1,
            },
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 8px',
            ...theme.mixins.toolbar,
        },
        listItem: {
            paddingLeft: 24
        },
        active: {
            backgroundColor: fade(secondaryColor, 0.2),
            borderLeft: `5px solid ${secondaryColor}`,
            paddingLeft: 19,
            color: secondaryColor,
            "&:hover": {
                backgroundColor: fade(secondaryColor, 0.3),

            },
            "&>div": {
                color: "inherit"
            },
            "& span": {
                color: "inherit"
            }
        },
        popper: {
            zIndex: theme.zIndex.drawer + 1,
        },
        popperPaper: {
            width: 160,
        },
        typography: {
            padding: theme.spacing.unit * 1.6,
        },
    }
})