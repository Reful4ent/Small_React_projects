import {Logo} from "../../shared/ui/Logo/Logo.jsx";
import "./Header.scss"
import {NavPanel} from "../../features/NavPanel/NavPanel.jsx";
import {SignInButton} from "../../features/SignInButton/SignInButton.jsx";
import {ThemeButton} from "../../features/ThemeProvider/ThemeButton/ThemeButton.jsx";



export const Header = () => {
    return (
        <>
            <header className="header">
                <Logo/>
                <NavPanel></NavPanel>
                <div className="header__users-button">
                    <SignInButton></SignInButton>
                    <ThemeButton></ThemeButton>
                </div>
            </header>
        </>
    )
}
