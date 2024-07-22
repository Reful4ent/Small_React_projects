import {windChecker} from "../../entities/Weather/WindChecker.js";
import "./WeatherFullCard.css"

export default function WeatherFullCard({cityParams}){
    return (
        <>
            <div className="full-info-day__card">
                <p className="city-info-text today">{getWeekDay(cityParams.dt_txt)}</p>
                <p className="city-info-text-today"><b>temperature:</b> {Math.round(cityParams.main.temp)}&deg; - feels
                    like: {Math.round(cityParams.main.feels_like)}&deg;</p>
                <p className="city-info-text-today"><b>pressure:</b> {cityParams.main.pressure} millimeter of mercury</p>
                <p className="city-info-text-today"><b>precipitation:</b> {cityParams.weather[0].description}</p>
                <p className="city-info-text-today">
                    <b>wind:</b> {cityParams.wind.speed}m/s, {windChecker(cityParams.wind.deg)} wind</p>
                <p className="city-info-text-today"><b>humidity:</b> {cityParams.main.humidity}%</p>
                <p className="city-info-text-today"><b>visibility:</b> {cityParams.visibility} meters</p>
                <p className="city-info-text-today"><b>cloudiness:</b> {cityParams.clouds.all}%</p>
                <p className="city-info-text-today"><b>probability of precipitation:</b> {cityParams.pop}%</p>
            </div>
        </>
    )
}

function getWeekDay(time) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(time);
    return days[date.getDay()];
}