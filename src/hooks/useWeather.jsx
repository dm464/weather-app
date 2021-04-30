import { useState, useEffect} from 'react';
import { getCityWeather } from '../api/api';

export default function useWeather(city) {
    const [weather, setWeather] = useState('');

    const fetchWeather = async (city) => {
        const data = await getCityWeather(city);
        setWeather(data.data);
    };

    return {weather, fetchWeather};
}
