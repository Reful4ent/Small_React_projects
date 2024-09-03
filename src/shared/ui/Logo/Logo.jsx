import "./Logo.scss"
import {ShoppingCartSVG} from "../SVGComponents/ShoppingCartSvg/ShoppingCartSVG.jsx";

export const Logo = () => {
    return (
        <>
            <div className="header__logo">
                <ShoppingCartSVG classNameCart="logo__image"/>
                <p className="logo__text">React Shop</p>
            </div>
        </>
    )
}