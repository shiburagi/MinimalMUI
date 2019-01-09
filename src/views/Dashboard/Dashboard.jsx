import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Chip, Grid, Paper, Switch, Typography } from '../../../node_modules/@material-ui/core';
import Card from "../../components/Card/Card"
import Table from "../../components/Table/Table";


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

const cards = [
    { percentage: 25, title: "Revenue", text: "$200,000", subtitle: "Oct", background: "linear-gradient(to right, #11998e, #38ef7d)" },
    { percentage: -9, title: "Revenue", text: "$181,000", subtitle: "Nov", background: "linear-gradient(to right,#7474bf, #348ac7)" },
    { percentage: 12, title: "Revenue", text: "$239,000", subtitle: "Dec", background: "linear-gradient(to right,#fc4a1a, #f7b733)" },
]

const tableData = [
    createData('John Smith', "2/12/2018", "Premium", "Active", 1),
    createData('Alex Burn', "2/12/2018", "Premium", "Inactive", 1),
    createData('Christina Bane', "2/12/2018", "Free", "Active", 1),
    createData('Ali Iskandar', "2/12/2018", "Premium", "Inactive", 0),
    createData('Nakamura Yuu', "2/12/2018", "Premium", "Active", 1),
    createData('William', "2/12/2018", "Free", "Active", 0)
];



const useStyles = makeStyles(theme => ({
    paper: {
        padding: 24,
        margin: 6
    }
}))
function Dashboard({ width }) {
    const classes = useStyles();
    const chartHeight = isWidthUp('md', width) ? 500 : 300;
    return (<div>
        <Grid container>
            <Grid item xs={12} sm={12} md={8}>
                <Paper square className={classes.paper}>
                    <Typography color={"secondary"} variant={"subtitle1"}>Overall Stats</Typography>

                    <ResponsiveContainer height={chartHeight}>

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
                    <ResponsiveContainer height={chartHeight}>

                        <BarChart data={data}
                            layout="vertical"
                            margin={{ top: 32, left: -16, bottom: 16, right: 32 }}
                        >
                            <YAxis dataKey="name" type="category" />
                            <XAxis hide type="number" />
                            <Tooltip cursor={{ fill: '#efefef', strokeWidth: 2 }} />
                            <Bar type="monotone" dataKey="twitter" fill="#1abc9c" opacity={0.6} />
                            <Bar type="monotone" dataKey="facebook" fill="#f39c12" opacity={0.6} />
                            <Bar type="monotone" dataKey="instagram" fill="#3498db" opacity={0.6} />

                        </BarChart>
                    </ResponsiveContainer>
                </Paper>
            </Grid>
        </Grid>
        <Grid container>

            <Grid item xs={12} sm={12} md={9}>
                <Paper square className={classes.paper}>
                    <Typography color={"secondary"} variant={"subtitle1"}>User Stats</Typography>
                    <Table header={header} data={tableData} style={{
                        marginTop: -48
                    }} />
                </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={3} style={{
                color: "white",
            }}>
                {

                    cards.map((card, index) => (<Grid key={index} item xs={12} sm={12} md={12} style={{ height: "29%" }}>
                        <Card {...card}/>
                    </Grid>))}
                {/* <Grid item xs={12} sm={12} md={12} style={{ height: "29%" }}>
                    <Card classes={classes} title={"Revenue"} text={"$181,000"} percentage={-9}
                        subtitle="Nov"
                        background="linear-gradient(to right,#7474bf, #348ac7)" />

                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ height: "29%" }}>
                    <Card classes={classes} title={"Revenue"} text={"$239,000"} percentage={12}
                        subtitle="Dec"
                        background="linear-gradient(to right,#fc4a1a, #f7b733)" />

                </Grid> */}
            </Grid>


        </Grid >
    </div >
    )
}

export default withWidth()(Dashboard);