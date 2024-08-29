import {AuthContext} from "./context.js";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {route} from "../../shared/api/route.js";
import {token} from "../../shared/api/token.js";



export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(localStorage.getItem("user") || null);


    const signIn = async (data) => {
        try {
            const response = await axios.get(
                route +
                `shop-users?filters[email][$eq]=${data.email}&filters[password][$eq]=${data.password}`,
                {
                    headers: {
                        'Authorization': `Bearer ` + token,
                    }
                }
            );
            if (response.status === 200) {
                console.log(response.status)
                if (response.data.data.length !== 0) {
                    const tempUser = {
                        surname: response.data.data[0].attributes.surname,
                        name: response.data.data[0].attributes.name,
                        email: response.data.data[0].attributes.email,
                        password: response.data.data[0].attributes.password,
                        phone: response.data.data[0].attributes.phone,
                        address: response.data.data[0].attributes.address,
                    }
                    setUser(tempUser);
                    localStorage.setItem("user", JSON.stringify(tempUser));
                    return true
                } else {
                    localStorage.removeItem("user");
                }
            }
            return false;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    const signUp = async (data) => {
        try {

            const isUserExist = await axios.get(
                route +
                `shop-users?filters[email][$eq]=${data.email}`,
                {
                    headers: {
                        'Authorization': `Bearer ` + token,
                    }
                }
            );
            if (isUserExist.status === 200 && isUserExist.data.data.length !== 0) {
                    return false;
            }


            const response = await axios.post(
                route +
                'shop-users',
                {
                    data: {
                        surname: data.surname,
                        name: data.name,
                        email: data.email,
                        password: data.password,
                    }
                },
                {
                    headers: {
                        'Authorization': `Bearer ` + token,
                    }
                }
            );
            if (response.status === 200) {
                const tempUser = {
                    surname: data.surname,
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    phone: null,
                    address: null,
                    orders: null,
                }
                setUser(tempUser);
                localStorage.setItem("user", JSON.stringify(tempUser));
                return true
            }
            return false;
        } catch (error) {
            console.error(error);
        }
    }

    const signOut =  () => {
        setUser(null);
        localStorage.removeItem("user");
        navigate('/home');
    }

    const value = {
        user,
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