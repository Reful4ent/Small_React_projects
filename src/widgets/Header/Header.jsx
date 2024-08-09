import {Logo} from "../../shared/ui/Logo/Logo.jsx";
import "./Header.scss"
import {NavPanel} from "../../features/NavPanel/NavPanel.jsx";



export const Header = () => {
    return (
        <>
            <header className="header">
                <Logo/>
                <NavPanel></NavPanel>
            </header>
        </>
    )
}
