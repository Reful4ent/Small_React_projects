import {Suspense} from "react";
import {Loader} from "../../shared/ui/Loader/Loader.jsx";
import {Outlet} from "react-router-dom";


export const SignLayout = () => {

    return (
        <>
            <Suspense fallback={<Loader/>}>
                <Outlet></Outlet>
            </Suspense>
        </>
    )
}