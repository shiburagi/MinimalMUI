import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Chip, Grid, Paper, Switch, Typography } from '../../../node_modules/@material-ui/core';
import Table from "../../components/Table/Table";

const data = [
    { name: 'Jan', facebook: 40, twitter: 24, instagram: 24, amt: 24 },
    { name: 'Feb', facebook: 30, twitter: 13, instagram: 44, amt: 22 },
    { name: 'Mar', facebook: 20, twitter: 98, instagram: 20, amt: 22 },
    { name: 'Apr', facebook: 27, twitter: 39, instagram: 29, amt: 20 },
    { name: 'May', facebook: 18, twitter: 48, instagram: 94, amt: 21 },
    { name: 'Jun', facebook: 23, twitter: 38, instagram: 14, amt: 25 },
    { name: 'Jul', facebook: 34, twitter: 43, instagram: 54, amt: 21 },
    { name: 'Aug', facebook: 34, twitter: 43, instagram: 72, amt: 21 },
    { name: 'Sep', facebook: 34, twitter: 13, instagram: 23, amt: 21 },
    { name: 'Oct', facebook: 34, twitter: 43, instagram: 59, amt: 21 },
    { name: 'Nov', facebook: 34, twitter: 33, instagram: 70, amt: 21 },
    { name: 'Dec', facebook: 33, twitter: 21, instagram: 64, amt: 21 },
];

const header = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
    { id: 'date', numeric: false, disablePadding: true, label: 'Date' },
    { id: 'type', numeric: false, disablePadding: true, label: 'Type' },
    { id: 'status', numeric: false, disablePadding: true, label: 'Status' },
    { id: 'option', numeric: true, disablePadding: true, label: 'Option' },
];


let counter = 0;
function createData(name, date, type, status, option) {
    counter += 1;
    return {
        id: counter, name, date,
        type: <Chip label={type} color={type === "Premium" ? "secondary" : "default"} />,
        status: <span style={{ color: status !== "Active" && "#999" }}>{status}</span>,
        option: <Switch checked={option === 1} />
    };
}

const tableData = [
    createData('John Smith', "2/12/2018", "Premium", "Active", 1),
    createData('Alex Burn', "2/12/2018", "Premium", "Inactive", 1),
    createData('Christina Bane', "2/12/2018", "Free", "Active", 1),
    createData('Ali Iskandar', "2/12/2018", "Premium", "Inactive", 0),
    createData('Nakamura Yuu', "2/12/2018", "Premium", "Active", 1),
    createData('William', "2/12/2018", "Free", "Active", 0)
];

const useStyles = makeStyles({
    paper: {
        padding: 24,
        margin: 6
    }
})
function Dashboard() {
    const classes = useStyles();
    return (<div>
        <Grid container>
            <Grid item xs={12} sm={12} md={8}>
                <Paper square className={classes.paper}>
                    <Typography color={"secondary"} variant={"subtitle1"}>Overall Stats</Typography>

                    <ResponsiveContainer height={500}>

                        <LineChart data={data}
                            margin={{ top: 32, left: -16, bottom: 16, right: 32 }}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="1 1" />
                            <Tooltip />
                            <Line type="monotone" dataKey="twitter" stroke="#2ecc71" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="facebook" stroke="#f39c12" />
                        </LineChart>
                    </ResponsiveContainer>


                </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <Paper square className={classes.paper}>
                    <Typography color={"secondary"} variant={"subtitle1"}>Trends</Typography>
                    <ResponsiveContainer height={500}>

                        <BarChart data={data}
                            layout="vertical"
                            margin={{ top: 32, left: -16, bottom: 16, right: 32 }}
                        >
                            <YAxis dataKey="name" type="category" />
                            <XAxis hide type="number" />
                            <Tooltip />
                            <Bar type="monotone" dataKey="twitter" fill="#1abc9c" />
                            <Bar type="monotone" dataKey="facebook" fill="#f39c12" />
                            <Bar type="monotone" dataKey="instagram" fill="#3498db" />

                        </BarChart>
                    </ResponsiveContainer>
                </Paper>
            </Grid>
        </Grid>
        <Grid container>

            <Grid item xs={12} sm={12} md={9}>
                <Paper square className={classes.paper}>
                    <Typography color={"secondary"} variant={"subtitle1"}>User Stats</Typography>
                    <Table header={header} data={tableData} />
                </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={3} style={{
                color: "white"
            }}>

                <Grid item xs={12} sm={12} md={12}>
                    <Paper className={classes.paper} style={{ /* Chrome 10-25, Safari 5.1-6 */
                        background: "linear-gradient(to right, #11998e, #38ef7d)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                        height: "30%",
                    }}>
                        <Typography color={"inherit"} variant={"h2"}
                            style={{ position: "absolute", right: 40, marginTop: 12, opacity: 0.3 }}>25%</Typography>

                        <Typography color={"inherit"} variant={"subtitle1"} style={{ fontWeight: "bolder" }}>Revenue</Typography>
                        <Typography color={"inherit"} variant={"h4"}>$200,000</Typography>
                        <Typography color={"inherit"} variant={"subtitle1"} style={{ marginTop: 8 }}>Oct</Typography>

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Paper className={classes.paper} style={{ /* Chrome 10-25, Safari 5.1-6 */
                        background: "linear-gradient(to right,#7474bf, #348ac7)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                        height: "30%",
                    }}>
                        <Typography color={"inherit"} variant={"h2"}
                            style={{ position: "absolute", right: 40, marginTop: 12, opacity: 0.3 }}>-9%</Typography>

                        <Typography color={"inherit"} variant={"subtitle1"} style={{ fontWeight: "bolder" }}>Revenue</Typography>
                        <Typography color={"inherit"} variant={"h4"}>$181,000</Typography>
                        <Typography color={"inherit"} variant={"subtitle1"} style={{ marginTop: 8 }}>Nov</Typography>

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Paper className={classes.paper} style={{ /* Chrome 10-25, Safari 5.1-6 */
                        background: "linear-gradient(to right,#fc4a1a, #f7b733)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                        height: "30%",
                    }}>
                        <Typography color={"inherit"} variant={"h2"}
                            style={{ position: "absolute", right: 40, marginTop: 12, opacity: 0.3 }}>12%</Typography>

                        <Typography color={"inherit"} variant={"subtitle1"} style={{ fontWeight: "bolder" }}>Revenue</Typography>
                        <Typography color={"inherit"} variant={"h4"}>$239,00</Typography>
                        <Typography color={"inherit"} variant={"subtitle1"} style={{ marginTop: 8 }}>Dec</Typography>

                    </Paper>
                </Grid>
            </Grid>


        </Grid >
    </div>
    )
}

export default Dashboard;