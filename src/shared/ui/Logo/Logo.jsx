import "./Logo.css"

export default function Logo(){
    return (
        <>
            <div className="weather-header__logo">
                <img className="weather-header__logo-icon" src="/public/icons/weather.svg"/>
                <p className="weather-header__logo-text">WEATHER TODAY</p>
            </div>
        </>
    )
}