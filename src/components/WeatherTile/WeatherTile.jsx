import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import '@fortawesome/fontawesome-free/css/all.min.css';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        [theme.breakpoints.up('sm')]: {
            height: props => props.size,
            width: props => props.size,
        },
        margin: theme.spacing(2),
    },
}));

export default function WeatherTile(props) {
    const { size, icon, date, high, low, precipitation, humidity } = props;
    const allDays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const classes = useStyles({ size: size });
    return (
        <Card className={classes.root}>
            <CardContent style={{ textAlign: 'left' }}>
                <Typography variant="h6">
                    {allDays[date.getDay()]} {date.getMonth() + 1}/{date.getDate()}
                </Typography>
                <img src={icon} alt="amCharts weather icon" height={64} />
                <Typography variant="h5">
                    {high}&deg; / {low}&deg;
                </Typography>
                <Typography>
                    <i className="fas fa-umbrella"></i>
                    {precipitation}%
                <i className="fas fa-tint"></i>
                    {humidity}%
                </Typography>
            </CardContent>
        </Card>
    )
}
