import React from 'react'
import { getCityWeather } from '../../api/api';

export default function Today() {
    const data = getCityWeather('new york');
    console.log("🚀 ~ file: Today.jsx ~ line 6 ~ Today ~ data", data)
    
    data.then(resp => console.log(resp.data))
    return (
        <div>
            Today
        </div>
    )
}