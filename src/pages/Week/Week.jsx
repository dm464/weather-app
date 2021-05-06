import React from 'react';
import { WeatherTile } from '../../components';
import { kToF, addDays, mapToIcon } from '../../utils/helpers';
import {makeStyles} from '@material-ui/styles';

export default function Week(props) {
    const classes = useStyles();
    const { today, week } = props;
    const d = new Date();
    week.map((day, index) => console.log(day.weather[0].id));
    return (
        <div className={classes.outter}>
        <div className={classes.inner}>
            {week.map((day, index) =>
                <WeatherTile
                    key={index}
                    size={200}
                    icon={mapToIcon(day.weather[0].id)}
                    weather={day}
                    date={addDays(d, index + 1)}
                    high={kToF(day.temp.max)}
                    low={kToF(day.temp.min)}
                    precipitation={day.pop * 100}
                    humidity={day.humidity}
                />
            )}
        </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    outer: {
        display: 'flex',
        margin: theme.spacing(2)
    },
    inner: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
}));
