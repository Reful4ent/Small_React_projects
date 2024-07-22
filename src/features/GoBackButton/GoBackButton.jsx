import {useNavigate} from "react-router-dom";
import "./GoBackButton.css"

export default function GoBackButton() {
    const navigate = useNavigate();
    return (
        <>
            <button className="back-button" type="button" onClick={() => navigate(-1)}>
                <img src="/public/icons/go-back.svg" className="back-button__background"/>
            </button>
        </>
    )
}