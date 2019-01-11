import React from "react"
import { makeStyles } from "@material-ui/styles";
import { Paper, Typography } from "../../../node_modules/@material-ui/core";
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: 24,
        marginTop: "2px",
        marginBottom: "6px",
        marginLeft: 2,
        marginRight: 2,
    }
}))
function Card({ cardNumber = "-", expireDate = "-", icon, cardType: type, background = "white" }) {
    const classes = useStyles();
    return <Paper className={classes.paper} style={{
        background,
    }}>

        <div style={{ position: "relative" }}>
            <Typography color={"inherit"} variant={"subtitle2"}>Card Number</Typography>
            <Typography color={"inherit"} variant={"h5"} style={{ fontWeight: "bolder", marginTop: 12, textAlign: "center" }}>
                {cardNumber}
            </Typography>
            <br />
            <br />
            <Typography color={"inherit"} variant={"subtitle2"}>Valid Through</Typography>
            <Typography color={"inherit"} variant={"subtitle2"}
                style={{ fontWeight: "bolder" }}>{expireDate}</Typography>
            {
                icon ? icon :
                    <img alt={type} src={require("../../assets/svg/" + type + ".svg")} height="32px"
                        style={{
                            position: "absolute",
                            right: 0,
                            bottom: 0
                        }} />
            }
        </div>
    </Paper>
}


Card.propTypes = {
    cardNumber: PropTypes.string,
    expireDate: PropTypes.string,
    cardType: PropTypes.oneOf(["visa", "mastercard", "amex"]),
    background: PropTypes.string,
    icon: PropTypes.element
};

export default Card;