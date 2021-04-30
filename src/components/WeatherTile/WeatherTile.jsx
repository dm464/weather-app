import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        [theme.breakpoints.up('sm')]: {
            height: props => props.size,
            width: props => props.size,
        },
        margin: theme.spacing(2)
    },
}));

export default function WeatherTile(props) {
    const classes = useStyles({ size: props.size });
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h4">
                    Test
                </Typography>
            </CardContent>
        </Card>
    )
}
