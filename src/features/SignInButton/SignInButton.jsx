import "./SignInButton.scss"
import {Navigate, Route, useNavigate} from "react-router-dom";

export const SignInButton = () => {

    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        navigate("auth/signIn");
    }
    return (
        <>
            <button className="sign-in-button" onClick={(event) => handleSignIn(event)}>Sign in</button>
        </>
    )
}