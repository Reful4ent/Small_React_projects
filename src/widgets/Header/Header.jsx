import SearchField from "../../features/Search/SearchField/SearchField.jsx";
import ToggleSwitch from "../../shared/ui/Toggle/ToggleSwitch.jsx";
import "./Header.css"
import Logo from "../../shared/ui/Logo/Logo.jsx";

export default function Header({themeIsBlack,handleThemeChanged,fetchData}) {
   return (
       <>
           <header className="header">
               <div className="weather-header">
                   <Logo></Logo>
                   <SearchField fetchData={fetchData}></SearchField>
                   <ToggleSwitch themeIsBlack={themeIsBlack} handleThemeChanged={handleThemeChanged}></ToggleSwitch>
               </div>
           </header>
       </>
   )
}