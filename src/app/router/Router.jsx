import {MainLayout} from "../layouts/MainLayout.jsx";
import {
    AboutPage,
    ErrorPage,
    FullProductPage,
    HomePage,
    ProductsPage,
    ProfilePage, ShoppingCartPage,
    SignInPage,
    SignUpPage
} from "./lazyPages.jsx";
import {Navigate} from "react-router-dom";
import {PrivateRoute} from "../../features/PrivateRoute/PrivateRoute.jsx";
import {SignLayout} from "../layouts/SignLayout.jsx";





export const router =[
    {
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
                path: 'products/:id',
                element: <FullProductPage/>
            },
            {
                path: 'about',
                element: <AboutPage/>,
            },
            {
                path: 'profile',
                element: <PrivateRoute><ProfilePage/></PrivateRoute>,
            },
            {
                path: 'shoppingCart',
                element: <PrivateRoute><ShoppingCartPage/></PrivateRoute>,
            },
            {
                path: '*',
                element: <Navigate to="/home"/>
            },
        ]
    },
    {
        path: 'auth/',
        element: <SignLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "signIn",
                element: <SignInPage/>,
            },
            {
                path: "signUp",
                element: <SignUpPage/>,
            }
        ]
    },
    ]