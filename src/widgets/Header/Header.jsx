import SearchField from "../SearchField/SearchField.jsx";
import ToggleSwitch from "../../shared/ui/Toggle/ToggleSwitch.jsx";
import "./Header.css"

export default function Header() {
   return (
       <>
           <header className="header">
               <div className="weather-header">
                   <img className="weather-header__icon" src="/public/icons/weather.svg"/>
                   <p className="weather-header__text">WEATHER TODAY</p>
                   <SearchField></SearchField>
                   <ToggleSwitch></ToggleSwitch>
               </div>
           </header>
       </>
   )
}