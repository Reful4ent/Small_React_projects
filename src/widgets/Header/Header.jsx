import {Logo} from "../../shared/ui/Logo/Logo.jsx";
import "./Header.scss"
import {NavPanel} from "../../features/NavPanel/NavPanel.jsx";
import {SignInButton} from "../../features/SignInButton/SignInButton.jsx";



export const Header = () => {
    return (
        <>
            <header className="header">
                <Logo/>
                <NavPanel></NavPanel>
                <SignInButton></SignInButton>
            </header>
        </>
    )
}
