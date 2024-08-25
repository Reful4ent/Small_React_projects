import {useLocation} from "react-router-dom";
import {GoBackButton} from "../../features/GoBackButton/GoBackButton.jsx";
import {FullProductCard} from "../../entities/FullProductCard/FullProductCard.jsx";
import "./FullProductPage.scss"

export const FullProductPage = () => {
    const location = useLocation();
    console.log(location.state.product);
    return (
        <>
            <div className="full-product">
                <GoBackButton/>
                <FullProductCard product={location.state.product} />
            </div>
        </>
    )
}