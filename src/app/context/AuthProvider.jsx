import {AuthContext} from "./context.js";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {route} from "../../shared/api/route.js";
import {token} from "../../shared/api/token.js";



export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(localStorage.getItem("user") || null);
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') || 'false');

    const signIn = async (data) => {
        try {
            const response = await axios.get(
                route +
                `/shop-users?filters[email][$eq]=${data.email}&filters[password][$eq]=${data.password}`,
                {
                    headers: {
                        'Authorization': `Bearer ` + token,
                    }
                }
            );
            console.log(response);
            return response;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    const signUp = async (data) => {
        try {

            const isUserExist = await axios.get(
                route +
                `/shop-users?filters[email][$eq]=${data.email}`,
                {
                    'Authorization': `Bearer ` + token,
                }
            );


            const response = await axios.post(
                route +
                '/shop-users',
                {
                    data: {
                        surname: data.surname,
                        name: data.name,
                        email: data.email,
                        password: data.password,
                    }
                },
                {
                    'Authorization': `Bearer ` + token,
                }
            );
            console.log(response);
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    const signOut =  () => {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
    }

    const value = {
        user,
        isLoggedIn,
        signIn,
        signUp,
        signOut
    }

    return(
        <>
            <AuthContext.Provider value={value} >
                {children}
            </AuthContext.Provider>
        </>
    )
}