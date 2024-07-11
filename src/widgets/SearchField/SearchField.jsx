import {useEffect, useState} from "react";
import {fetchCurrentCity} from "../../shared/api/fetchWeather.js";


const getCitiesList = async (city) => {
    if (city === '' || city === null) {
        return null;
    }
    let list = [];
    let fetchCities = await fetchCurrentCity(city).then((response) => {
        for(let item of response) {
            list.push({city: item.name,country: item.country,state: item.state});
        }
    })
    return list;
}


export default function SearchField(){
    const [responseCity, setResponseCity] = useState('');
    const [citiesList, setCitiesList] = useState(null);

    useEffect(() => {
        const Debounce = setTimeout(() => {
            getCitiesList(responseCity).then((response) => {
                setCitiesList(response);
            });
        },200);
        return () => clearTimeout(Debounce);
    }, [responseCity]);


    /// {(citiesList === [] || citiesList === null) ? <Nothing/> : <CitiesListElem cityList={citiesList}/>}
    return (
        <>
            <div className="header__search-form">
                <input className="search-form__input"
                       type="search"
                       value={responseCity}
                       onChange={(e) => setResponseCity(e.target.value)}/>
                <div className="search-form__cities-list">
                    {(citiesList === [] || citiesList === null) ? <Nothing/> : <CitiesList cityList={citiesList}/>}
                </div>
            </div>
        </>
    )
}


function Nothing() {
    return (
        <>
            <div>nothing</div>
        </>
    )
}


function CitiesList({cityList}) {

    return (
        <>
            <ul>
                {cityList.map((item,index) => (
                    <li key={index} className="cities-list__item">
                        {item.city}, {item.country}, {item.state}
                    </li>
                ))}
            </ul>
        </>
    )
}