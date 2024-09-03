import {SignOutButton} from "../../features/SignOutButton/SignOutButton.jsx";
import "./ProfileCard.scss"
import {useAuth} from "../../app/context/context.js";
import {useEffect, useState} from "react";
import {route} from "../../shared/api/route.js";

export const ProfileCard = () => {

    const auth = useAuth();
    const [user, setUser] = useState(auth.user);

    useEffect(() => {
        console.log(user.image);
    }, []);

    return (
        <>
            <div className="profile-main__card">
                <div className="card-me">
                    <div className="card-me__content">
                        {user.image ?
                            <img className="content__profile-img" src={route + user.image}/>
                            :
                            (<svg className="content__profile-img" xmlns="http://www.w3.org/2000/svg">
                                <circle className="content__profile-img__circle" fill="red"/>
                            </svg>)}
                        <p className="content__profile-name">{user.surname} {user.name}</p>
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