import { useState, useEffect} from 'react';
import { getZipWeather, getTestWeather } from '../api/api';

export default function useWeather(zip) {
    const [weather, setWeather] = useState(null);

    const fetchWeather = async (zip) => {
        // const data = await getZipWeather(zip);
        const data = {data: require('../api/data.json')}
        setWeather(data.data);
    };

    useEffect(() => {
        fetchWeather(zip);
    }, [zip])

    return {weather, fetchWeather};
}
