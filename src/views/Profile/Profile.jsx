
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Avatar, Button, FormControl, FormControlLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography } from "../../../node_modules/@material-ui/core";

const useStyles = makeStyles(theme => ({
    avatar: {
        margin: "auto",
        marginTop: -50,
        marginLeft: 30,
        width: 100,
        height: 100,
        border: "1px solid white"
    },
    gridItem: {
        padding: 6
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    group: {
        marginLeft: 12
    },
}))

function Profile() {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid className={classes.gridItem} item xs={12} sm={12} md={3}>
                <Paper square style={{
                    minHeight: "40vh",
                    paddingBottom:16
                }}>
                    <div style={{
                        // background: "linear-gradient(to right, #2196f3, #f44336)",
                        background:`url(${require("../../assets/img/banner1.jpg")})`,
                        backgroundPosition: "center",
                        height: 140
                    }} />
                    <Avatar alt="Remy Sharp" src={require("../../assets/img/user1.jpg")} className={classes.avatar} />
                    <Typography variant={"subtitle2"} color="textSecondary" style={{
                        marginTop: 24,
                        padding: "0px 32px",
                        fontWeight: "bolder"

                    }}>Bruce Mars</Typography>
                    <Typography variant={"subtitle2"} color="textSecondary" style={{
                        padding: "0px 32px",
                        marginBottom: 8,


                    }}>New york, USA</Typography>
                    <Typography variant={"subtitle2"} color="default" style={{
                        padding: "0px 32px",
                        marginTop: 16,

                    }}>
                        About
                    </Typography>

                    <Typography variant={"subtitle2"} color="textSecondary" style={{
                        padding: "0px 32px",
                        marginBottom: 16,


                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sagittis leo. Curabitur venenatis a sapien eu egestas. Suspendisse et convallis augue. Sed quis felis convallis, luctus turpis nec, varius massa. Suspendisse ut arcu enim. Proin lobortis nunc vitae dui feugiat ultrices. Curabitur ex augue, consequat tristique neque non, tincidunt placerat urna.
                    </Typography>
                </Paper>
            </Grid>
            <Grid className={classes.gridItem} item xs={12} sm={12} md={9}>
                <Paper square style={{
                    minHeight: "50vh",
                }}>
                    <Grid container style={{ padding: "16px 16px" }}>
                        <Grid item xs={12} sm={12} md={12} className={classes.gridItem}
                            style={{
                                textAlign: "right"
                            }}>
                            <Button variant="contained" color="secondary" >
                                Save
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} className={classes.gridItem} >
                            <Typography style={{ marginLeft: 8 }}>First Name</Typography>

                            <TextField
                                id="outlined-name"
                                fullWidth={true}
                                value="Bruce"
                                className={classes.textField}
                                margin="dense"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} className={classes.gridItem} >
                            <Typography style={{ marginLeft: 8 }}>Last Name</Typography>

                            <TextField
                                id="outlined-name"
                                value="Mars"
                                fullWidth={true}
                                className={classes.textField}
                                margin="dense"
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} className={classes.gridItem} >
                            <Typography style={{ marginLeft: 8 }}>Date of Birth</Typography>
                            <TextField
                                id="outlined-name"
                                InputProps={
                                    {
                                        type: "date"
                                    }
                                }
                                className={classes.textField}
                                margin="dense"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} className={classes.gridItem} >
                            <Typography style={{ marginLeft: 8 }}>Gender</Typography>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <RadioGroup
                                    aria-label="Gender"
                                    name="gender1"
                                    className={classes.group}
                                    value="male"
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />

                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} className={classes.gridItem} >
                            <Typography style={{ marginLeft: 8 }}>Address</Typography>

                            <TextField
                                id="outlined-name"
                                multiline={true}
                                rows="4"
                                value=""
                                fullWidth={true}
                                className={classes.textField}
                                margin="dense"
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} className={classes.gridItem} >
                            <Typography style={{ marginLeft: 8 }}>About</Typography>

                            <TextField
                                id="outlined-name"
                                multiline={true}
                                rows="4"
                                value=""
                                fullWidth={true}
                                className={classes.textField}
                                margin="dense"
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )

}

export default Profile;