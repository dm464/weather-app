import * as icons from '../assets/weather-icons/animated';

export function kToF(kelvin) {
    var f = (kelvin - 273.15) * 9 / 5 + 32;
    return Math.round(f);
}

export function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export function mapToIcon(id, isNight = false) {
    switch (Math.round(id)) {
        case 2:
            return icons.thunder;
        case 3:
            if (id === 302 || id >= 312) {
                return isNight ? icons.rainy_5 : icons.rainy_3;
            }
            else {
                return isNight ? icons.rainy_4 : icons.rainy_2;
            }
            break;
        case 5:
            if (id === 500) {
                return isNight ? icons.rainy_4 : icons.rainy_2;
            }
            else if (id === 501 && id === 520) {
                return isNight ? icons.rainy_5 : icons.rainy_3;
            }
            else if (id === 511) {
                return icons.rainy_7;
            }
            else {
                return icons.rainy_6;
            }

            break;
        case 6:
            // snow - excluding sunny snow svg images
            if (id === 600 || id === 620) {
                return icons.snowy_4;
            }
            else if (id === 601 || id === 621) {
                return icons.snowy_5;
            }
            else if (id === 602 || id === 622) {
                return icons.snowy_6;
            }
            else {
                return icons.rainy_7;
            }
        case 8:
            switch (id) {
                case 800:
                    return isNight ? icons.day : icons.night;
                case 801:
                    return isNight ? icons.cloudy_night_1 : icons.cloudy_day_1;
                case 802:
                    return isNight ? icons.cloudy_night_2 : icons.cloudy_day_2;
                case 803:
                    return isNight ? icons.cloudy_night_3 : icons.cloudy_day_3;
                default:
                    return icons.cloudy;
            }
        default:
            return icons.weather;
    }
}