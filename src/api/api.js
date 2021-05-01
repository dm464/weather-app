import axios from 'axios';
import { OPEN_WEATHER_API_KEY as KEY } from './keys';

const WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5/';
const GEO_API_URL = 'http://api.openweathermap.org/geo/1.0/';

export async function getCityWeather(city) {
    // return await resolve(axios.get(WEATHER_API_URL.concat("weather"), { params: { q: city, appid: KEY } }));
    let ans;
    await axios.get(WEATHER_API_URL.concat("weather"), { params: { q: city, appid: KEY } }).then( (resp) => {
        ans = resp;
    }).catch( e => {
        ans = e;
    });
    return ans;
}

export async function getZipWeather(zip) {
    const [lat, lon] = await getGeocode(zip);
    return getAllWeather(lat, lon);
}

async function getGeocode(zip) {
    let ans;
    await axios.get(GEO_API_URL.concat("zip"), { params: { zip: `${zip},US`, appid: KEY } }).then( (resp) => {
        ans = resp.data;
    }).catch( e => {
        ans = {
            lat: null,
            lon: null
        };
    });
    // return ans;
    return [ans.lat, ans.lon];
}

async function getAllWeather(lat, lon) {
    let ans;
    await axios.get(WEATHER_API_URL.concat("onecall"), { params: { lat, lon, appid: KEY } }).then( (resp) => {
        ans = resp;
    }).catch( e => {
        ans = e;
    });
    return ans;
}

// async function resolve(promise) {
//     const resolved = {
//         data: null,
//         error: null
//     };
//     try {
//         resolved.data = await promise;
//     } catch (e) {
//         resolved.error = e;
//     }
//     if (!resolved.error) {
//         return resolved.data;
//     }
//     else {
//         return resolved.error;
//     }
// }
