export function kToF(kelvin) {
    var f = (kelvin - 273.15) * 9 / 5 + 32;
    return Math.round(f);
}