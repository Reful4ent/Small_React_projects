import {useEffect, useState} from "react";
import fetchCurrentWeather from "./shared/api/methods.jsx";
const App = () => {
    const [cityParams, setCityParams] = useState({
        name: null,
        lat: 0,
        lon: 0,
    })


    useEffect(() => {
        const data = fetchCurrentWeather("Moscow","RU", "ru").then((response) => {
            console.log(response);
            setCityParams({
                name: response[0].name,
                lat: response[0].lat,
                lon: response[0].lon
            });
        });
    },[])

    return (
        <>
            <p>{cityParams.lon}</p>
            <p>{cityParams.lat}</p>
        </>
    )
}

export default App
