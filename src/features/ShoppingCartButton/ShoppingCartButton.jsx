import {ShoppingCartSVG} from "../../shared/ui/SVGComponents/ShoppingCartSvg/ShoppingCartSVG.jsx";
import "./ShoppingCartButton.scss"
import {useNavigate} from "react-router-dom";

export const ShoppingCartButton = () => {
    const navigate = useNavigate();
    return (
        <>
            <button className="shopping-cart-button" onClick={() => navigate('shoppingCart')}>
                <ShoppingCartSVG classNameCart="shopping-cart-button__image"/>
            </button>
        </>
    )
}