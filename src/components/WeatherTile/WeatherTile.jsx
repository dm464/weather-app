import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { kToF } from "../../utils/conversions";
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
    const { size, icon, weather, day } = props;
    const classes = useStyles({ size: size });
    return (
        <Card className={classes.root}>
            <CardContent style={{ textAlign: 'left' }}>
                <Typography variant="h6">
                    {day}
                    <i class="fas fa-umbrella"></i>
                </Typography>
                <img src={props.icon} alt="amCharts weather icon" height={64} />
                <Typography variant="h6">
                    Hi: {kToF(weather.temp.max)}&deg;
                </Typography>
                <Typography variant="h6">
                    Low: {kToF(weather.temp.min)}&deg;
                </Typography>
                <Typography>
                    {weather.weather[0].main}
                </Typography>
            </CardContent>
        </Card>
    )
}
