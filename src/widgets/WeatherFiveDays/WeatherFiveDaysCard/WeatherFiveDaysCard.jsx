import {getImage} from "../../../entities/Weather/WeatherParams.js";
import "./WeatherFiveDaysCard.css"

export default function WeatherFiveDaysCard({fiveDayParams, id,themeIsBlack}){
    return(
        <>
            <li className="weather-list__five-day-item" key={id}>
                <div className={themeIsBlack ? "five-day-item black" : "five-day-item"}>
                    <p className={themeIsBlack ? "text-card-day text-date-five black" : "text-card-day text-date-five"}>{getWeekDay(fiveDayParams.dt_txt)}</p>
                    <img className="weather-icon-day" src={getImage(fiveDayParams.weather[0].icon)}/>
                    <p className={themeIsBlack ? "text-card-day text-temp black" : "text-card-day text-temp"}>{Math.round(fiveDayParams.main.temp)}&deg;</p>
                    <p className="text-card-day text-feels-temp">{Math.round(fiveDayParams.main.feels_like)}&deg;</p>
                    <p className="text-card-day text-weather">{fiveDayParams.weather[0].description}</p>
                </div>
            </li>
        </>
    )
}

function getWeekDay(time) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(time);
    return days[date.getDay()];
}