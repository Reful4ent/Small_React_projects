import GoBackButton from "../../features/GoBackButton/GoBackButton.jsx";
import {useLocation} from "react-router-dom";
import Logo from "../../shared/ui/Logo/Logo.jsx";
import ToggleSwitch from "../../shared/ui/Toggle/ToggleSwitch.jsx";
import "./DayPage.css"
import WeatherFullCard from "../../widgets/WeatherFullCard/WeatherFullCard.jsx";
import "/src/app/styles.css"


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

