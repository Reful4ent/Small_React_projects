import {windChecker} from "../../entities/Weather/WindChecker.js";
import "./WeatherCard.css"


export default function WeatherCard({cityParams}){
    return (
        <>
            <div className="weather-card">
                <div className="weather-card__main">
                    <div className="main__weather">
                        <div className="main__weather__icon">
                            <p>{cityParams.temp}</p>
                            <p>Today</p>
                        </div>
                        <div className="main__weather__city">
                            <p>latitude: {cityParams.lat}</p>
                            <p>longitude: {cityParams.lon}</p>
                        </div>
                    </div>
                </div>
                <div className="weather-card__conditions">
                    <div className="main__city-info">
                        <div className="city-info city-info__temperature">
                            <img className="city-info-icon" src="/icons/Weather%20Icons/thermometer.svg"/>
                            <p className="city-info-text">temperature: {cityParams.temp}&deg; - feels
                                like: {cityParams.temp_feels_like}&deg;</p>
                        </div>
                        <div className="city-info city-info__pressure">
                            <img className="city-info-icon" src="/icons/Weather%20Icons/barometer.svg"/>
                            <p className="city-info-text">pressure: {cityParams.pressure} millimeter of mercury</p>
                        </div>
                        <div className="city-info city-info__precipitation" >
                            <img className="city-info-icon" src="/icons/Weather%20Icons/rain.svg"/>
                            <p className="city-info-text">precipitation: {cityParams.weather[0].description}</p>
                        </div>
                        <div className="city-info city-info__wind">
                            <img className="city-info-icon" src="/icons/Weather%20Icons/wind.svg"/>
                            <p className="city-info-text">wind: {cityParams.wind.speed}m/s, {windChecker(cityParams.wind.deg)} wind</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}