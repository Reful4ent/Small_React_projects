import Header from "../widgets/Header/Header.jsx";
import {useEffect, useState} from "react";
import {fetchCurrentCity,fetchCurrentCityWeather,fetchFiveDaysWeather} from "../shared/api/fetchWeather.js";
import WeatherCard from "../widgets/WeatherCard/WeatherCard.jsx";
import WeatherConditionCard from "../widgets/WeatherCondCard/WeatherCondCard.jsx";
import "./MainPage.css"

export default function MainPage(){
    const [cityParams, setCityParams] = useState({
        name: null,
        lat: 0,
        lon: 0,
        temp: 0,
        temp_feels_like:0,
        wind:0,
        pressure:0,
        weather: [{}],
    })

    const [loading, setLoading] = useState(false);
    const [currentCity, setCurrentCity] = useState('moscow');
    const [currentState, setCurrentState] = useState('');
    const [currentCountry, setCurrentCountry] = useState('');

    useEffect(() => {
        const data = fetchCurrentCityWeather(currentCity,currentState,currentCountry, "us")
            .then((response) => {
                setCityParams({
                    name: response.name,
                    country: response.sys.country,
                    lat: response.coord.lat,
                    lon: response.coord.lon,
                    temp: Math.round(response.main.temp),
                    temp_feels_like: Math.round(response.main.feels_like),
                    wind: response.wind,
                    pressure: response.main.pressure * 0.75,
                    weather: response.weather,
                    icon: response.weather[0].icon,
                });
                setLoading(true);
            });
        //const data_2 = fetchFiveDaysWeather("Moscow","RU", "ru").then((response) => {
        //    console.log(response);
        //})
        //const data_3 = fetchCurrentCity("Moscow", "ru").then((response) => {
        //    console.log(response);
        //})
    },[])
    //<WeatherCard cityParams={cityParams} isLoad={loading}></WeatherCard>
    //<WeatherConditionCard cityParams={cityParams} isLoad={loading}></WeatherConditionCard>
    //<WeatherCard cityParams={cityParams} isLoad={loading}></WeatherCard>
    //<WeatherConditionCard cityParams={cityParams} isLoad={loading}></WeatherConditionCard>
    return (
        <>
            <Header></Header>
            <main className="main-cards">
                <WeatherCard cityParams={cityParams} isLoad={loading}></WeatherCard>
                <WeatherConditionCard cityParams={cityParams} isLoad={loading}></WeatherConditionCard>
            </main>
        </>
    )
}