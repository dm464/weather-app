import React from 'react';
import { WeatherTile } from '../../components';
import { thunder as icon } from '../../assets/weather-icons/animated';
import { kToF, addDays } from '../../utils/helpers';

export default function Week(props) {
    const { today, week } = props;
    const d = new Date();
    const numDay = d.getDay();
    console.log(week[0]);
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {week.map((day, index) =>
                <WeatherTile
                    key={index}
                    size={200}
                    icon={icon}
                    weather={day}
                    date={addDays(d, index + 1)}
                    high={kToF(day.temp.max)}
                    low={kToF(day.temp.min)}
                    precipitation={day.pop * 100}
                    humidity={day.humidity}
                />
            )}
        </div>
    )
}
