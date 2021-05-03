import React from 'react';
import { WeatherTile } from '../../components';
import { kToF, addDays, mapToIcon } from '../../utils/helpers';

export default function Week(props) {
    const { today, week } = props;
    const d = new Date();
    week.map((day, index) => console.log(day.weather[0].id));
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
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
    )
}
