import React from 'react';
import { WeatherTile } from '../../components';

export default function Week( props ) {
    console.log("week");
    return (
        <div>
            <WeatherTile size={200} />
        </div>
    )
}
