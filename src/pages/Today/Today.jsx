import React from 'react'
import { getCityWeather } from '../../api/api';

export default function Today() {
    const data = getCityWeather('new york');
    console.log(data);
    return (
        <div>
            Today
        </div>
    )
}