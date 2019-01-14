import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
    footer: {
        background: theme.palette.background.paper,
        padding: theme.spacing.unit,
        width: "100%",
        bottom:0,
        verticalAlign: "middle",
        borderTop: `1px solid ${theme.palette.divider}`,
    
    },
    gridItem: {
        padding: "16px 16px",
        color:theme.palette.text.secondary
    },
}))
function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Grid container>
                <Grid className={classes.gridItem} item xs={12} sm={12} md={2}>
                    <Typography variant="h6" color="primary" >Minimal MUI</Typography>
                </Grid>
                <Grid className={classes.gridItem} item xs={12} sm={12} md={7} style={{
                    textAlign: "center"
                }}>
                    <Button color="inherit">
                        Info
                    </Button>/
                    <Button color="inherit">
                        Product
                    </Button>/
                    <Button color="inherit">
                        Contact
                    </Button>/
                    <Button color="inherit">
                        Privacy Policy
                    </Button>
                </Grid>
                <Grid className={classes.gridItem} item xs={12} sm={12} md={3} style={{
                    textAlign: "right"
                }}>
                    <Button color="inherit">
                        Fb
                    </Button>/
                    <Button color="inherit">
                        In
                    </Button>/
                    <Button color="inherit">
                        Tw
                    </Button>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer;