import React from "react"
import { makeStyles } from "@material-ui/styles";
import { Paper, Typography } from "../../../node_modules/@material-ui/core";


const useStyles = makeStyles(theme => ({
    paper: {
        padding: 24,
        margin: 6
    },
    cardPercentage: {
        position: "absolute",
        right: 40,
        marginTop: 24,
        opacity: 0.3,
        "& span": {
            fontSize: 20
        }

    },
    cardMonth: {
        opacity: 0.8,
        marginTop: 12
    }
}))
function Card({ percentage, text, title, subtitle, background = "black" }) {
    const classes = useStyles();
    return <Paper className={classes.paper} style={{ /* Chrome 10-25, Safari 5.1-6 */
        background,
        height: "100%",
    }}>
        <Typography color={"inherit"} variant={"h3"}
            className={classes.cardPercentage}>{percentage}<span>%</span></Typography>

        <Typography color={"inherit"} variant={"subtitle1"} style={{ fontWeight: "bolder" }}>{title}</Typography>
        <Typography color={"inherit"} variant={"h4"}>{text}</Typography>
        <Typography color={"inherit"} variant={"subtitle1"}
            className={classes.cardMonth}>{subtitle}</Typography>

    </Paper>
}



export default Card;