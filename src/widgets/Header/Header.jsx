import {Logo} from "../../shared/ui/SVGComponents/Logo/Logo.jsx";
import "./Header.scss"
import {NavPanel} from "../../features/NavPanel/NavPanel.jsx";
import {SignInButton} from "../../features/SignInButton/SignInButton.jsx";
import {ThemeButton} from "../../features/ThemeProvider/ThemeButton/ThemeButton.jsx";
import {useAuth} from "../../app/context/context.js";
import {Loader} from "../../shared/ui/Loader/Loader.jsx";
import {ProfileButton} from "../../features/ProfileButton/ProfileButton.jsx";



export const Header = () => {
    const auth = useAuth();

    return (
        <>
            <header className="header">
                <Logo/>
                <NavPanel/>
                <div className="header__users-button">
                    {(auth === null || auth.user === null || auth.user === '') ? <SignInButton/> : <ProfileButton/>}
                    <ThemeButton/>
                </div>
            </header>
        </>
    )
}
