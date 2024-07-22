import GoBackButton from "../../features/GoBackButton/GoBackButton.jsx";
import {useLocation} from "react-router-dom";
import Header from "../../widgets/Header/Header.jsx";
import Logo from "../../shared/ui/Logo/Logo.jsx";
import ToggleSwitch from "../../shared/ui/Toggle/ToggleSwitch.jsx";
import "./DayPage.css"
import {getImage} from "../../entities/Weather/WeatherParams.js";
import {windChecker} from "../../entities/Weather/WindChecker.js";
import WeatherFullCard from "../../widgets/WeatherFullCard/WeatherFullCard.jsx";



export default function DayPage() {
    const location = useLocation();
    return (
        <>
            <header className="header-day">
                <Logo></Logo>
                <ToggleSwitch></ToggleSwitch>
                <GoBackButton></GoBackButton>
            </header>
            <main className="full-info-day">
                <WeatherFullCard cityParams={location.state}></WeatherFullCard>
            </main>
        </>
    )
}

