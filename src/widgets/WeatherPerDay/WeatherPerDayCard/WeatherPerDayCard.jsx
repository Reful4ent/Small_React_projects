import {getImage} from "../../../entities/Weather/WeatherParams.js";
import "./WeatherPerDayCard.css"

export default function WeatherPerDayCard({thisHoursParams, id}){
    return(
        <>
           <li className="weather-list__per-day-item" key={id}>
               <div className="per-day-item">
                   <p className="text-card-day text-date">{getWeekDay(thisHoursParams.dt_txt)}</p>
                   <img className="weather-icon-day" src={getImage(thisHoursParams.weather[0].icon)}/>
                   <p className="text-card-day text-temp">{Math.round(thisHoursParams.main.temp)}&deg;</p>
                   <p className="text-card-day text-feels-temp">{Math.round(thisHoursParams.main.feels_like)}&deg;</p>
                   <p className="text-card-day text-weather">{thisHoursParams.weather[0].description}</p>
               </div>
           </li>
        </>
    )
}


function getWeekDay(time) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(time);
    return (
        <>
            {days[date.getDay()]}
            <br/>
            {time.split(' ')[1]}
        </>
    )
}