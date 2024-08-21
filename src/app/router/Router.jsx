import {MainLayout} from "../layouts/MainLayout.jsx";
import {AboutPage, ErrorPage, HomePage, ProductsPage, ProfilePage, SignInPage, SignUpPage} from "./lazyPages.jsx";
import {createBrowserRouter} from "react-router-dom";





export const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            path: 'home',
            element: <HomePage/>,
        },
        {
            path: 'products',
            element: <ProductsPage/>,
        },
        {
            path: 'about',
            element: <AboutPage/>,
        },
    ]
}])