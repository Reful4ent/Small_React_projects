import {Header} from "../../widgets/Header/Header.jsx";
import {Suspense} from "react";
import {Outlet} from "react-router-dom";
import {Loader} from "../../shared/ui/Loader/Loader.jsx";
import {Footer} from "../../widgets/Footer/Footer.jsx";


export const MainLayout = () => {
    return (
        <>
            <Header></Header>
            <Suspense fallback={<Loader/>}>
                <Outlet></Outlet>
            </Suspense>
            <Footer></Footer>
        </>
    );
}