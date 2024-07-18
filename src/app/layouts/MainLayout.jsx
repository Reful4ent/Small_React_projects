import Header from "../../widgets/Header/Header.jsx";
import {Outlet} from "react-router-dom";

export default function MainLayout() {
    return (
        <>
            <Outlet></Outlet>
        </>
    )
}