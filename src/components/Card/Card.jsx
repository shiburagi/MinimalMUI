import React from "react"
import { makeStyles } from "@material-ui/styles";
import { Paper, Typography } from "../../../node_modules/@material-ui/core";
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: 24,
        margin: "6px 0",
        height: "146px",
    },
    cardPercentage: {
        position: "relative",
        textAlign: "right",
        right: 0,
        top: 0,
        marginTop: "-90px",
        opacity: 0.3,
        "&>span": {
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
    }}>

        <div>
            <Typography color={"inherit"} variant={"subtitle1"} style={{ fontWeight: "bolder" }}>{title}</Typography>
            <Typography color={"inherit"} variant={"h4"}>{text}</Typography>
            <Typography color={"inherit"} variant={"subtitle1"}
                className={classes.cardMonth}>{subtitle}</Typography>

            {percentage >= 0 ? <Typography color={"inherit"} variant={"h2"}
                className={classes.cardPercentage}>{percentage}<span>%</span>
            </Typography> : ""}

        </div>
    </Paper>
}


Card.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    subtitle: PropTypes.string,
    percentage: PropTypes.number,
    background: PropTypes.string,
};

export default Card;