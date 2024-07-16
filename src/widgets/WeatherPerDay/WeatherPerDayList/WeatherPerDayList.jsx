import WeatherPerDayCard from "../WeatherPerDayCard/WeatherPerDayCard.jsx";
import "./WeatherPerDayList.css"
import Loading from "../../../shared/ui/Loading/Loading.jsx";

export default function WeatherPerDayList({perDayParams,isLoad,themeIsBlack}){
    return(
        <>
            <ul className={isLoad ? "main__weather-list" : "main__weather-list loading"}>
                {isLoad ? (<PerDayList perDayParams={perDayParams} themeIsBlack={themeIsBlack}/> ) : (<Loading/>)}
            </ul>
        </>
    )
}


function PerDayList({perDayParams,themeIsBlack}){
    return (
        <>
            {perDayParams.map((item,index) => (
                <WeatherPerDayCard key={index} id={index} thisHoursParams={item} themeIsBlack={themeIsBlack}/>
            ))}
        </>
    )
}