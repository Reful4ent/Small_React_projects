
import "./WeatherFiveDaysList.css"
import WeatherFiveDaysCard from "../WeatherFiveDaysCard/WeatherFiveDaysCard.jsx";
import WeatherPerDayCard from "../../WeatherPerDay/WeatherPerDayCard/WeatherPerDayCard.jsx";
import Loading from "../../../shared/ui/Loading/Loading.jsx";

export default function WeatherFiveDaysList({fiveDayParams, isLoad,themeIsBlack}){
    return(
        <>
            <ul className={isLoad ? "main__weather-list" : "main__weather-list loading"}>
                {isLoad ? (<FiveDayList fiveDayParams={fiveDayParams} themeIsBlack={themeIsBlack}/>) : (<Loading/>)}
            </ul>
        </>
    )
}
function FiveDayList({fiveDayParams,themeIsBlack}){
    return (
        <>
            {fiveDayParams.map((item,index) => (
                <WeatherFiveDaysCard key={index} id={index} fiveDayParams={item} themeIsBlack={themeIsBlack}/>
            ))}
        </>
    )
}