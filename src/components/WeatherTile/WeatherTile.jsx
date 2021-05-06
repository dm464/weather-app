import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import '@fortawesome/fontawesome-free/css/all.min.css';
import clsx from 'clsx';

export default function WeatherTile(props) {
    const { size, icon, date, high, low, precipitation, humidity } = props;
    const allDays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const classes = useStyles({ size: size });
    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <Grid container>
                    <Grid item className={classes.separate}>
                        <img src={icon} alt="amCharts weather icon" height='100%' />
                    </Grid>
                    <Grid item sm={12}>
                        <Grid item sm={12}>
                            <Typography variant="h6" className={classes.text}>
                                {allDays[date.getDay()]} {date.getMonth() + 1}/{date.getDate()}
                            </Typography>
                        </Grid>
                        <Grid item sm={12} className={classes.inGrid}>
                            <img src={icon} alt="amCharts weather icon" height={64} />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Typography variant="h5" className={classes.text}>
                                {high}&deg; / <span className={classes.subtle}>{low}&deg;</span>
                            </Typography>
                            <Typography className={clsx(classes.text, classes.last)}>
                                <i className={clsx("fas fa-umbrella", classes.icon)}></i>
                                {precipitation}%
                                {` `}
                                <i className={clsx("fas fa-tint", classes.icon)}></i>
                                {humidity}%
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </CardContent>
        </Card>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        backgroundColor: 'rgba(255,255,255,0.2)',
        [theme.breakpoints.up('sm')]: {
            width: props => props.size,
        },
        margin: theme.spacing(2),
    },
    content: {
        padding: theme.spacing(2),
        '&:last-child': {
            paddingBottom: theme.spacing(2),
        },
    },
    text: {
        textAlign: 'right',
        [theme.breakpoints.up('sm')]: {
            textAlign: 'center',
        }
    },
    subtle: {
        color: 'rgb(0,0,0,0.5)'
    },
    separate: {
        textAlign: 'left',
        flexGrow: 1,
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    inGrid: {
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    icon: {
        color: theme.palette.primary.dark
    },
    last: {
        marginTop: theme.spacing(1)
    }
}));