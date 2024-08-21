import {createContext, useEffect, useState} from "react";
import {useLocalStorage} from "../../shared/hooks/useLocalStorage/useLocalStorage.js";


export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useLocalStorage('theme','light');

    const components = [
        'body',
    ]

    useEffect(() => {
        if(theme === 'dark') {
            components.forEach(component => document.querySelectorAll(component).forEach(el => el.classList.add("dark")));
        } else {
            components.forEach(component => document.querySelectorAll(component).forEach(el => el.classList.remove("dark")));
        }
    }, []);

    return(
        <>
            <ThemeContext.Provider value={[theme, setTheme]}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}