import {getImage} from "../../../entities/Weather/WeatherParams.js";
import "./WeatherFiveDaysCard.css"
import {Link} from "react-router-dom";

export default function WeatherFiveDaysCard({fiveDayParams, id}){

    return(
        <>
            <Link to={`weatherDay/${id}`} state={fiveDayParams} style={{ color: 'inherit', textDecoration: 'none'}}>
                <li className="weather-list__five-day-item" key={id}>
                    <div className="five-day-item">
                        <p className="text-card-day text-date-five">{getWeekDay(fiveDayParams.dt_txt)}</p>
                        <img className="weather-icon-day" src={getImage(fiveDayParams.weather[0].icon)}/>
                        <p className="text-card-day text-temp">{Math.round(fiveDayParams.main.temp)}&deg;</p>
                        <p className="text-card-day text-feels-temp">{Math.round(fiveDayParams.main.feels_like)}&deg;</p>
                        <p className="text-card-day text-weather">{fiveDayParams.weather[0].description}</p>
                    </div>
                </li>
            </Link>
        </>
    )
}

function getWeekDay(time) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(time);
    return days[date.getDay()];
}