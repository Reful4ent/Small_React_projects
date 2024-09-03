import {SignOutButton} from "../../features/SignOutButton/SignOutButton.jsx";
import "./ProfilePage.scss"
import {ProfileCard} from "../../entities/ProfileCard/ProfileCard.jsx";

export const ProfilePage = () => {

    return (
        <>
            <div className="profile-main">
                <h1 className="profile-main__header">MY ACCOUNT</h1>
                <ProfileCard/>
            </div>
        </>
    )
}