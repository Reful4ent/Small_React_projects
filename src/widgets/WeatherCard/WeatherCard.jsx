import "./WeatherCard.css"
import {getImage} from "../../entities/Weather/WeatherParams.js";
import Loading from "../../shared/ui/Loading/Loading.jsx";

//<img className="weather-icon" src={imgConverter[cityParams.icon]}/>
export default function WeatherCard({cityParams,isLoad}) {
    return (
        <>
            <div className={isLoad ? "weather-card" : "weather-card weather-card_loading"}>
                {isLoad ? (<Weather cityParams={cityParams}/>) : (<Loading/>)}
            </div>
        </>
    )
}

function Weather({cityParams}) {
    return (
        <>
            <div className="main__weather">
                <div className="main__weather__icon">
                    <img className="weather-icon" src={getImage(cityParams.icon)}/>
                    <p className="text-card weather-temperature">{cityParams.temp}&deg;</p>
                    <p className="text-card weather-today">Today</p>
                    <p className="text-card weather-city">{cityParams.name}, {cityParams.country}</p>
                </div>
                <div className="main__weather__city">
                    <p className="text-card city-lat">latitude: {cityParams.lat}</p>
                    <p className="text-card city-lon">longitude: {cityParams.lon}</p>
                </div>
            </div>
        </>
    )
}
