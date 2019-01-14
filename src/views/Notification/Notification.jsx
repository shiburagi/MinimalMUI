import React from 'react';
import Button from '@material-ui/core/Button';

import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '../../../node_modules/@material-ui/core';
import SnackbarContent from "../../components/Snackbar/SnackbarContent";
import NotificationIcon from "@material-ui/icons/Notifications"

const useStyles2 = makeStyles(theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
}));

function Notification() {
    const classes = useStyles2();
    const [open, setOpen] = React.useState(false);
    const [variant, setVariant] = React.useState();

    const handleClick = (variant) => () => {
        setOpen(true);
        setVariant(variant);
    }

    function handleClose(event, reason) {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    }

    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Button className={classes.margin} onClick={handleClick("primary")}>
                        Open success snackbar
      </Button>
                    <SnackbarContent
                        variant="primary"
                        className={classes.margin}
                        message="This is an primary message!"
                    />

                    <SnackbarContent
                        variant="secondary"
                        className={classes.margin}
                        message="This is an secondary message!"
                    />

                    <SnackbarContent
                        variant="error"
                        className={classes.margin}
                        message="This is an error message!"
                    />
                    <SnackbarContent
                        variant="warning"
                        className={classes.margin}
                        message="This is a warning message!"
                    />
                    <SnackbarContent
                        variant="info"
                        className={classes.margin}
                        message="This is an information message!"
                    />
                    <SnackbarContent
                        variant="success"
                        className={classes.margin}
                        message="This is a success message!"
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Button className={classes.margin} onClick={handleClick("inverse")}>
                        Open inverse snackbar
                    </Button>

                    <SnackbarContent
                        variant="inverse"
                        className={classes.margin}
                        message="I love snacks."
                    />
                    <SnackbarContent
                        variant="inverse"
                        className={classes.margin}
                        message="I love candy. I love cookies. I love cupcakes. I love cheesecake. I love chocolate."
                    />
                    <SnackbarContent
                        icon={NotificationIcon}
                        variant="inverse"
                        className={classes.margin}
                        message="I love candy. I love cookies. I love cupcakes. I love cheesecake. I love chocolate."
                    />

                </Grid>
            </Grid>

            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <SnackbarContent
                    onClose={handleClose}
                    variant={variant}
                    message={`This is a ${variant} message!`}
                />
            </Snackbar>

        </div>
    );
}

export default Notification;
