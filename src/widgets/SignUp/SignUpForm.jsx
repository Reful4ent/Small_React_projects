import "./SignUpForm.scss"
import {useAuth} from "../../app/context/context.js";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {errorsStatus} from "./errors.js";



export const SignUpForm = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const [errors, setErrors] = useState(errorsStatus);
    const [showExistError, setShowExistError] = useState(false);
    const [canSubmit, setCanSubmit] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const user = {
            surname: form.surname.value,
            name: form.name.value,
            email: form.email.value,
            password: form.password.value,
        }
        await auth.signUp(user).then((response) => {
            if (response === true) {
                setShowExistError(false);
                navigate("/home");
            } else {
                setShowExistError(true);
            }
        });
    }

    const handleNameInputChange = (e,type) => {
        const name = e.target.value;
        if( name.match(/[#@!№.*+?^${}()|;:"'<>,_=`~%&[\]\\]+/g) || name.match(/[0-9]+/g)){
            if(type === "name") {
                setErrors({
                        ...errors,
                        name: true,
                    }
                )
            } else if(type === "surname") {
                setErrors({
                        ...errors,
                        surname: true,
                    }
                )
            }
        } else {
            if(type === "name") {
                setErrors({
                        ...errors,
                        name: false,
                    }
                )
            } else if(type === "surname") {
                setErrors({
                        ...errors,
                        surname: false,
                    }
                )
            }
        }
    }


    const handlePasswordInputChange = (e) => {
        const tempPass = e.target.value;
        if( tempPass.match(/[A-Z]+/g) === null || tempPass.match(/[0-9]+/g) === null) {
            setErrors({
                ...errors,
                password: true,
            })
        } else {
            setErrors({
                ...errors,
                password: false,
            })
        }
    }

    return (
        <>
            <form className="sign-up-form" onSubmit={async (event) => await handleSubmit(event)}>
                <p className="sign-up__text">Surname</p>
                <input className="sign-up__input" type="text" name="surname" placeholder="Surname" required minLength={5} maxLength={20} onChange={(event) => handleNameInputChange(event, "surname")} />
                {errors.surname && (<p className="sign-up__error">The surname must not contain numbers or symbols!</p>)}
                <p className="sign-up__text">Name</p>
                <input className="sign-up__input" type="text" name="name" placeholder="Name" required minLength={3} maxLength={20} onChange={(event) => handleNameInputChange(event, "name")} />
                {errors.name && (<p className="sign-up__error">The name must not contain numbers or symbols!</p>)}
                <p className="sign-up__text">Email</p>
                <input className="sign-up__input" type="email" name="email" placeholder="Email" maxLength={30}  required/>
                <p className="sign-up__text">Password</p>
                <input className="sign-up__input" type="password" name="password" placeholder="Password" minLength={8} maxLength={20} required onChange={(event) => handlePasswordInputChange(event)} />
                {errors.password && (<p className="sign-up__error">Password should contains at least one uppercase letter and one number</p>)}
                {showExistError && (<p className="sign-up__error">This email is already in use</p>)}
                <button className="sign-up__btn" type="submit">Sign In</button>
            </form>
        </>
    )
}