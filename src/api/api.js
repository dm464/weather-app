import axios from 'axios';
import { OPEN_WEATHER_API_KEY as KEY } from './keys';

const WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5/';

export async function getCityWeather(city) {
    // return await resolve(axios.get(WEATHER_API_URL.concat("weather"), { params: { q: city, appid: KEY } }));
    let ans;
    const resp = await axios.get(WEATHER_API_URL.concat("weather"), { params: { q: city, appid: KEY } }).then( (resp) => {
        ans = resp;
    }).catch( e => {
        ans = e;
    });
    return ans;
}

async function resolve(promise) {
    const resolved = {
        data: null,
        error: null
    };
    try {
        resolved.data = await promise;
    } catch (e) {
        resolved.error = e;
    }
    if (!resolved.error) {
        return resolved.data;
    }
    else {
        return resolved.error;
    }
}
