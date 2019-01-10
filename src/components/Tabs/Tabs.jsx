import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

function CustomTabs({ tabs, value: defaultValue = 0, toolbarProps, ...props }) {
    const classes = useStyles();
    const [value, setValue] = React.useState(defaultValue);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    const tabsValue = value;

    const labels = [];
    let Component;
    tabs.forEach(({ value, component, ...rest }, index) => {
        if (value === undefined) {
            value = index;
        }
        labels.push(
            <Tab key={value} value={value} {...rest} />
        );
        if (value === tabsValue)
            Component = component;
    })

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default" {...toolbarProps}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    {...props}
                >

                    {labels}
                </Tabs>
            </AppBar>
            {
                Component
            }


        </div>
    );
}

CustomTabs.propTypes = {
    tabs: PropTypes.array,
    toolbarProps: PropTypes.object,
    action: PropTypes.func,
    centered: PropTypes.bool,
    children: PropTypes.node,
    component: PropTypes.object,
    fullWidth: PropTypes.bool,
    indicatorColor: PropTypes.oneOf(['secondary', 'primary']),
    onChange: PropTypes.func,
    scrollable: PropTypes.bool,
    ScrollButtonComponent: PropTypes.object,
    scrollButtons: PropTypes.oneOf(['auto', 'on', 'off']),
    TabIndicatorProps: PropTypes.object,
    textColor: PropTypes.oneOf(['secondary', 'primary', 'inherit']),
    value: PropTypes.any,
    variant: PropTypes.oneOf(['scrollable', 'fullWidth']),
    width: PropTypes.string
}

export default CustomTabs;
