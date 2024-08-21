import {Component} from "react";
import "./NavPanel.scss"
import {Link} from "react-router-dom";

export const NavPanel = () => {
    return(
        <>
            <nav className="header__nav-panel">
                <ul className="nav-panel__list">
                    <li className="nav-panel__list-item">
                        <Link to="/home" className="list-item__link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-panel__list-item">
                        <Link to="/products" className="list-item__link">
                            Products
                        </Link>
                    </li>
                    <li className="nav-panel__list-item">
                        <Link to="/about" className="list-item__link">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}