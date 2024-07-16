import {useEffect, useState} from "react";
import {fetchCurrentCity} from "../../../shared/api/fetchWeather.js";
import {getCitiesList} from "../../../entities/Weather/SearchCity.js";
import SearchCitiesList from "../SearchCitiesList/SearchCitiesList.jsx";
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
                <div className="search-form__cities-list" >
                    {(citiesList !== [] && citiesList !== null) && <SearchCitiesList cityList={citiesList} fetchData={fetchData}/>}
                </div>
            </div>
        </>
    )
}



