import Header from "../widgets/Header/Header.jsx";
import {useCallback, useEffect, useState} from "react";
import {fetchCurrentCity,fetchCurrentCityWeather,fetchFiveDaysWeather} from "../shared/api/fetchWeather.js";
import WeatherCard from "../widgets/WeatherCard/WeatherCard.jsx";
import WeatherConditionCard from "../widgets/WeatherCondCard/WeatherCondCard.jsx";
import "./MainPage.css"
import Button from "../shared/ui/Button/Tab.jsx";
import ThemeChanger from "../features/ThemeChanger/ThemeChanger.js";

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

    const [themeIsBlack, setThemeIsBlack] = useState(false);

    function handleThemeChanged(){
        setThemeIsBlack(!themeIsBlack);
        if(themeIsBlack) {
            ThemeChanger('light')
        } else {
            ThemeChanger("dark");
        }
    }

    const fetchData = useCallback(async (city,state,country) => {
        await fetchCurrentCityWeather(city,state,country, "us")
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
    },[])

    useEffect( () => {
        fetchData('New York','','');
    },[fetchData])


    ///<Header themeIsBlack={themeIsBlack} handleThemeChanged={handleThemeChanged} fetchData={fetchData}></Header>
    //             <main className={themeIsBlack ? "main-cards black" : "main-cards"}>
    //                 <WeatherCard cityParams={cityParams} isLoad={loading}></WeatherCard>
    //                 <WeatherConditionCard cityParams={cityParams} isLoad={loading}></WeatherConditionCard>
    //             </main>
    //<Button text="sda" onClick={() => console.log("sd")}></Button>

    return (
        <>
            <Header themeIsBlack={themeIsBlack} handleThemeChanged={handleThemeChanged} fetchData={fetchData}></Header>
            <main className="main-cards">
                <WeatherCard cityParams={cityParams} isLoad={loading}></WeatherCard>
                <WeatherConditionCard cityParams={cityParams} isLoad={loading}></WeatherConditionCard>
            </main>
        </>
    )
}