import "./ToggleSwitch.css"
import {useState} from "react";
import ThemeChanger from "../../../features/ThemeChanger/ThemeChanger.js";


export default function ToggleSwitch({themeIsBlack,handleThemeChanged}) {
    return (
        <>
            <label className="switch">
                <input type="checkbox" checked={themeIsBlack} onChange={handleThemeChanged}/>
                <span className="slider round"></span>
            </label>
        </>
    )
}