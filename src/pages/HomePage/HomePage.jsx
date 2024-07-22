import Header from "../../widgets/Header/Header.jsx";
import {useCallback, useEffect, useState} from "react";
import {fetchCurrentCityWeather,fetchFiveDaysWeather} from "../../shared/api/fetchWeather.js";
import WeatherCard from "../../widgets/WeatherCard/WeatherCard.jsx";
import WeatherConditionCard from "../../widgets/WeatherCondCard/WeatherCondCard.jsx";
import "./HomePage.css"
import Button from "../../shared/ui/Button/Tab.jsx";
import WeatherPerDayList from "../../widgets/WeatherPerDay/WeatherPerDayList/WeatherPerDayList.jsx";
import WeatherFiveDaysList from "../../widgets/WeatherFiveDays/WeatherFiveDaysList/WeatherFiveDaysList.jsx";

export default function HomePage(){

    const [cityParams, setCityParams] = useState(null)
    const [cityWeatherPerDay, setCityWeatherPerDay] = useState([]);
    const [cityWeatherFiveDay, setCityWeatherFiveDay] = useState([]);

    const [loading, setLoading] = useState(false);

    const [listIdButton, setListIdButton] = useState("#tab_1");

    const Lists = {
        "#tab_1" : <WeatherPerDayList perDayParams={cityWeatherPerDay} isLoad={loading}/>,
        "#tab_2" : <WeatherFiveDaysList fiveDayParams={cityWeatherFiveDay} isLoad={loading}/>
    }

    function handleListChanged(idButton,classNameButton){
        document.querySelectorAll(classNameButton).forEach(elem => elem.classList.remove("active"));
        document.querySelector(idButton).classList.add("active");
        setListIdButton(idButton);
    }

    const fetchData = useCallback(async (city,state,country) => {
        await fetchCurrentCityWeather(city,state,country, 'us')
            .then((response) => {
                console.log(response);
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
            });

        await fetchFiveDaysWeather(city,state,country,'us')
            .then((response) => {
                let items = [];
                for (let i = 0; i < (response.list.length / 5); i++) {
                    items.push(response.list[i]);
                }
                setCityWeatherPerDay(items);
                console.log(response);
                let items_2 = []
                for (let i = 0; i < response.list.length; i+=8){
                    items_2.push(response.list[i]);
                }
                setCityWeatherFiveDay(items_2);
                setLoading(true);
            })
    },[])

    useEffect( () => {
        setLoading(false);
        fetchData('Moscow','','RU');
    },[fetchData])

    return (
        <>
            <Header fetchData={fetchData}/>
            <div className="main-cards">
                <WeatherCard cityParams={cityParams} isLoad={loading}/>
                <WeatherConditionCard cityParams={cityParams} isLoad={loading}/>
            </div>
            <div className="button-list">
                <Button id="tab_1" text="24 Часа" onClick={() => handleListChanged("#tab_1",".tab")}/>
                <Button id="tab_2" text="5 дней" onClick={() => handleListChanged("#tab_2",".tab")}/>
            </div>
            <div className="weather-list">
                {Lists[listIdButton]}
            </div>
        </>
    )
}