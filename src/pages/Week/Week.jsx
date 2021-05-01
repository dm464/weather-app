import React from 'react';
import { WeatherTile } from '../../components';
import icon from '../../assets/weather-icons/animated/rainy-1.svg';


export default function Week( props ) {
    console.log("week");
    return (
        <div>
            <WeatherTile size={200} icon={icon} />
        </div>
    )
}
