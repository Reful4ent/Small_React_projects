import WeatherFiveDaysCard from "../WeatherFiveDaysCard/WeatherFiveDaysCard.jsx";
import Loading from "../../../shared/ui/Loading/Loading.jsx";
import "./WeatherFiveDaysList.css"

export default function WeatherFiveDaysList({fiveDayParams, isLoad}) {
    return (
        <>
            <ul className={isLoad ? "main__weather-list" : "main__weather-list loading"}>
                {isLoad ? (<FiveDayList fiveDayParams={fiveDayParams}/>) : (<Loading/>)}
            </ul>
        </>
    )
}

function FiveDayList({fiveDayParams}) {
    return (
        <>
            {fiveDayParams.map((item, index) => (
                <WeatherFiveDaysCard key={index} id={index} fiveDayParams={item}/>
            ))}
        </>
    )
}