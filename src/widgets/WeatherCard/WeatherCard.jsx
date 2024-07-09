import "./WeatherCard.css"
import {getImage} from "../../entities/Weather/WeatherParams.js";

//<img className="weather-icon" src={imgConverter[cityParams.icon]}/>
export default function WeatherCard({cityParams}) {
    return (
        <>
            <div className="weather-card">
                <div className="weather-card__main">
                    <div className="main__weather">
                        <div className="main__weather__icon">
                            <img className="weather-icon" src={getImage(cityParams.icon)}/>
                            <p className="text-card weather-temperature">{cityParams.temp}&deg;</p>
                            <p className="text-card weather-today">Today</p>
                            <p className="text-card weather-city">{cityParams.name}</p>
                        </div>
                        <div className="main__weather__city">
                        <p className="text-card city-lat">latitude: {cityParams.lat}</p>
                            <p className="text-card city-lon">longitude: {cityParams.lon}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}