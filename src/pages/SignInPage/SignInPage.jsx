
import {Logo} from "../../shared/ui/SVGComponents/Logo/Logo.jsx";
import {Link} from "react-router-dom";
import "./SignInPage.scss"
import {SignInForm} from "../../widgets/SignIn/SignInForm.jsx";

export const SignInPage = () => {

    return(
        <>
            <div className="sign-in-main">
                <div className="sign-in-content">
                    <Logo/>
                    <SignInForm/>
                    <p className="sign-in__to-sign-up">Don't have any account?<Link to="/auth/signUp"> Sign up!</Link></p>
                </div>
            </div>
        </>
    )
}