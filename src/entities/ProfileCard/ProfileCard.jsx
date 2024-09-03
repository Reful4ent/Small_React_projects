import {SignOutButton} from "../../features/SignOutButton/SignOutButton.jsx";
import "./ProfileCard.scss"
import {useAuth} from "../../app/context/context.js";

export const ProfileCard = () => {
    const auth = useAuth();
    return (
        <>
            <div className="profile-main__card">
                <div className="card-me">
                    <div className="card-me__content">
                        fdsfds
                    </div>
                    <div className="card-me__window">
                        sadsadsa
                    </div>
                </div>
                <SignOutButton/>
            </div>
        </>
    )
}