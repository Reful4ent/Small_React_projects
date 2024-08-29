import {useAuth} from "../../app/context/context.js";


export const SignOutButton = () => {
    const auth = useAuth();

    return (
        <>
            <button className="sign-out-button" onClick={auth.signOut}>SignOut</button>
        </>
    )
}