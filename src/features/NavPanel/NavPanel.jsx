import {Component} from "react";
import "./NavPanel.scss"

export const NavPanel = () => {
    return(
        <>
            <nav className="header__nav-panel">
                <ul className="nav-panel__list">
                    <li className="nav-panel__list-item">Home</li>
                    <li className="nav-panel__list-item">Products</li>
                    <li className="nav-panel__list-item">About</li>
                </ul>
            </nav>
        </>
    )
}