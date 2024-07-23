import {useNavigate} from "react-router-dom";


export const GoBackButton = () => {
    const navigate = useNavigate();

    return(
        <>
            <button className="back-button" type="button" onClick={() => navigate(-1)}></button>
        </>
    )
}