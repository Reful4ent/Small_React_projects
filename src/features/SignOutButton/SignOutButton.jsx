import {useAuth} from "../../app/context/context.js";
import "./SignOutButton.scss"

export const SignOutButton = () => {
    const auth = useAuth();

    return (
        <>
            <button className="sign-out-button" onClick={auth.signOut}>Sign out</button>
        </>
    )
}