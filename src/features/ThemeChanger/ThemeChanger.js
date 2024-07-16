

export default function ThemeChanger(theme) {
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

    if(theme === 'light') {
        components.forEach(component => document.querySelectorAll(component).forEach(elem => elem.classList.remove("black")))
    } else if (theme === 'dark') {
        components.forEach(component => document.querySelectorAll(component).forEach(elem => elem.classList.add("black")))
    }
}