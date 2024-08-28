import {Navigate, useNavigate} from "react-router-dom";
import {useAuth} from "../../app/context/context.js";


export const PrivateRoute = ({children}) => {
    const navigate = useNavigate();
    const auth = useAuth();

    if(auth === null || auth.user === null || auth.user === '')
        return <Navigate to="/auth/signIn" replace/>;
    return children;
}