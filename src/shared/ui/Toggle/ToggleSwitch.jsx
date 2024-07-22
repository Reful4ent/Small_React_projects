import "./ToggleSwitch.css"
import {useContext, useState} from "react";
import {ThemeContext} from "../../../features/ThemeChanger/ThemeChanger.jsx";


export default function ToggleSwitch() {
    const [theme,setTheme] = useContext(ThemeContext);
    const [themeIsBlack, setThemeIsBlack] = useState(theme === "dark");

    const handleThemeChanged = () => {
        setTheme(theme === "light" ? "dark" : "light");
        setThemeIsBlack(theme === 'light' ? true : false);
    }

    return (
        <>
            <label className="switch">
                <input type="checkbox" checked={themeIsBlack} onChange={handleThemeChanged}/>
                <span className="slider round"></span>
            </label>
        </>
    )
}