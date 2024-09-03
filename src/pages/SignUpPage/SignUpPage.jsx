
import {Link} from "react-router-dom";
import "./SignUpPage.scss"
import {Logo} from "../../shared/ui/Logo/Logo.jsx";
import {SignUpForm} from "../../widgets/SignUp/SignUpForm.jsx";

export const SignUpPage = () => {

    return (
        <>
            <div className="sign-up-main">
                <div className="sign-up-content">
                    <Logo></Logo>
                    <SignUpForm/>
                    <p className="sign-up__to-sign-in">Already have an account?<Link to="/auth/signIn"> Sign in!</Link></p>
                </div>
            </div>
        </>
    )
}