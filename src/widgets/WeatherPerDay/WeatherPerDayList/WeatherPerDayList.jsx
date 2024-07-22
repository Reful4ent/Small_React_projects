import WeatherPerDayCard from "../WeatherPerDayCard/WeatherPerDayCard.jsx";
import "./WeatherPerDayList.css"
import Loading from "../../../shared/ui/Loading/Loading.jsx";

export default function WeatherPerDayList({perDayParams,isLoad}){
    return(
        <>
            <ul className={isLoad ? "main__weather-list" : "main__weather-list loading"}>
                {isLoad ? (<PerDayList perDayParams={perDayParams}/> ) : (<Loading/>)}
            </ul>
        </>
    )
}


function PerDayList({perDayParams}){
    return (
        <>
            {perDayParams.map((item,index) => (
                <WeatherPerDayCard key={index} id={index} thisHoursParams={item}/>
            ))}
        </>
    )
}