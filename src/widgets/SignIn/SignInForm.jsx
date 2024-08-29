import "./SignInForm.scss"
import {useAuth} from "../../app/context/context.js";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import error from "eslint-plugin-react/lib/util/error.js";


export const SignInForm = () => {

    const auth = useAuth();
    const navigate = useNavigate();
    const [showError, setShowError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const user = {
            email: form.email.value,
            password: form.password.value,
        }

        await auth.signIn(user).then((response) => {
            if (response === true) {
                navigate("/home");
                setShowError(false);
            } else {
                    setShowError(true);
            }
        });
    }

    return (
        <>
            <form className="sign-in-form" onSubmit={async (event) => await handleSubmit(event)}>
                <p className="sign-in__text">Email</p>
                <input className="sign-in__input" type="email" name="email" placeholder="Email" required/>
                <p className="sign-in__text">Password</p>
                <input className="sign-in__input" type="password" name="password" placeholder="Password" required/>
                {showError && (<p className="sign-in__error">Wrong email or password!</p>)}
                <button className="sign-in__btn" type="submit">Sign In</button>
            </form>
        </>
    )
}