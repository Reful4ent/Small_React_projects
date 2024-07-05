import {useEffect, useState} from "react";
import {fetchCurrentCity, fetchCurrentCityWeather,fetchFiveDaysWeather} from "./shared/api/fetchWeather.js";
import WeatherCard from "./widgets/WeatherCard/WeatherCard.jsx";
const App = () => {
    const [cityParams, setCityParams] = useState({
        name: null,
        lat: 0,
        lon: 0,
    })


    useEffect(() => {
        const data = fetchCurrentCityWeather("Moscow","RU", "us")
            .then((response) => {
            console.log(response);
            setCityParams({
                name: response.name,
                lat: response.coord.lat,
                lon: response.coord.lon,
                temp: Math.round(response.main.temp),
                temp_feels_like: Math.round(response.main.feels_like),
                wind: response.wind,
                pressure: response.main.pressure * 0.75,
                weather: response.weather,
            })
        });
        //const data_2 = fetchFiveDaysWeather("Moscow","RU", "ru").then((response) => {
        //    console.log(response);
        //})
        //const data_3 = fetchCurrentCity("Moscow", "ru").then((response) => {
        //    console.log(response);
        //})
    },[])

    return (
        <>
            <WeatherCard cityParams={cityParams}></WeatherCard>
        </>
    )
}

export default App
