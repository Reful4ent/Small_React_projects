import SearchField from "../../features/Search/SearchField/SearchField.jsx";
import ToggleSwitch from "../../shared/ui/Toggle/ToggleSwitch.jsx";
import Logo from "../../shared/ui/Logo/Logo.jsx";
import "./Header.css"

export default function Header({fetchData}) {
    return (
        <>
            <header className="header">
                <div className="weather-header">
                    <Logo></Logo>
                    <SearchField fetchData={fetchData}></SearchField>
                    <ToggleSwitch></ToggleSwitch>
                </div>
            </header>
        </>
    )
}