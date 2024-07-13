import {useEffect, useState} from "react";
import {fetchCurrentCity} from "../../shared/api/fetchWeather.js";
import {getCitiesList} from "../../entities/Weather/SearchCity.js";
import "./SearchField.css"



export default function SearchField({fetchData}){
    const [responseCity, setResponseCity] = useState('');
    const [citiesList, setCitiesList] = useState(null);

    useEffect(() => {
        const Debounce = setTimeout(() => {
            getCitiesList(responseCity).then((response) => {
                setCitiesList(response);
            });
        },300);
        return () => clearTimeout(Debounce);
    }, [responseCity]);


    return (
        <>
            <div className="header__search-form">
                <input className={(citiesList !== [] && citiesList !== null) ? "search-form__input list" : "search-form__input"}
                       type="search"
                       placeholder="Moscow..."
                       value={responseCity}
                       onChange={(e) => setResponseCity(e.target.value)}/>
                <div className="search-form__cities-list">
                    {(citiesList !== [] && citiesList !== null) && <CitiesList cityList={citiesList} fetchData={fetchData}/>}
                </div>
            </div>
        </>
    )
}



function CitiesList({cityList,fetchData}) {
    return (
        <>
            <ul className="cities-list">
                {cityList.map((item,index) => (
                    <li key={index} className="cities-list__item" onDoubleClick={() => fetchData(item.city,item.country,item.state)}>
                        {item.city}, {item.country}, {item.state}
                    </li>
                ))}
            </ul>
        </>
    )
}