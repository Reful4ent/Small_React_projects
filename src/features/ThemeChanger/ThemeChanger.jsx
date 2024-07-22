import {createContext, useEffect, useState} from "react";
import {useLocalStorage} from "../../shared/hooks/useLocalStorage.js";
export const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>  {
    const [theme,setTheme] = useState('light');

    const components = [
        '.body-background',
        '.city-info-text',
        '.text-card.city-lat',
        '.text-card.city-lon',
        '.text-card.weather-today',
        '.text-card.weather-city',
        '.text-date',
        '.text-temp',
        '.per-day-item',
        '.five-day-item',
        '.tab'
    ]

    useEffect(() => {
        if(theme === 'dark') {
            components.forEach(component => document.querySelectorAll(component).forEach(elem => elem.classList.remove("black")))
        } else  {
            components.forEach(component => document.querySelectorAll(component).forEach(elem => elem.classList.add("black")))
        }
    }, [theme]);

    return (
        <>
            <ThemeContext.Provider value={[theme, setTheme]}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}