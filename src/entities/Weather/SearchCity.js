import {fetchCurrentCity} from "../../shared/api/fetchWeather.js";

export const getCitiesList = async (city) => {
    if (city === '' || city === null) {
        return null;
    }
    let list = [];
    let fetchCities = await fetchCurrentCity(city).then((response) => {
        for(let item of response) {
            list.push({city: item.name,country: item.country,state: item.state});
        }
    })
    return list;
}