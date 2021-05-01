import React from 'react';
import { WeatherTile } from '../../components';
import {thunder as icon} from '../../assets/weather-icons/animated';

export default function Week(props) {
    const { today, week } = props;
    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const numDay = new Date().getDay();
    console.log(week[0]);
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {week.map((day, index) =>
                <WeatherTile
                    key={index}
                    size={200}
                    icon={icon}
                    weather={day}
                    day={days[(numDay + index + 1) % 7]}
                />
            )}
        </div>
    )
}
