import {windChecker} from "../../entities/Weather/WindChecker.js";
import "./WeatherCondCard.css"
import Loading from "../Loading/Loading.jsx";



export default function WeatherConditionCard({cityParams, isLoad}){
    return (
        <>
            <div className={isLoad ? "weather-card__conditions" : "weather-card__conditions weather-card_loading"}>
                {isLoad ? (<WeatherCondition cityParams={cityParams}/>) : (<Loading/>)}
            </div>
        </>
    )
}


function WeatherCondition({cityParams}) {
    return (
        <>
            <div className="main__city-info">
                <img className="city-info__background" src="/public/img/cloud.png"/>
                <div className="city-info city-info__temperature">
                    <img className="city-info-icon" src="/icons/Weather%20Icons/thermometer.svg"/>
                    <p className="city-info-text"><b>temperature:</b> {cityParams.temp}&deg; - feels
                        like: {cityParams.temp_feels_like}&deg;</p>
                </div>
                <div className="city-info city-info__pressure">
                    <img className="city-info-icon" src="/icons/Weather%20Icons/barometer.svg"/>
                    <p className="city-info-text"><b>pressure:</b> {cityParams.pressure} millimeter of mercury</p>
                </div>
                <div className="city-info city-info__precipitation">
                    <img className="city-info-icon" src="/icons/Weather%20Icons/rain.svg"/>
                    <p className="city-info-text"><b>precipitation:</b> {cityParams.weather[0].description}</p>
                </div>
                <div className="city-info city-info__wind">
                    <img className="city-info-icon" src="/icons/Weather%20Icons/wind.svg"/>
                    <p className="city-info-text">
                        <b>wind:</b> {cityParams.wind.speed}m/s, {windChecker(cityParams.wind.deg)} wind</p>
                </div>
            </div>
        </>
    )
}