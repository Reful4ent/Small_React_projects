import {MainLayout} from "../layouts/MainLayout.jsx";
import {
    AboutPage,
    ErrorPage,
    FullProductPage,
    HomePage,
    ProductsPage,
    ProfilePage,
    SignInPage,
    SignUpPage
} from "./lazyPages.jsx";
import {createBrowserRouter, Navigate} from "react-router-dom";
import {PrivateRoute} from "../../features/PrivateRoute/PrivateRoute.jsx";





export const router =[
    {
        path: "/",
        element: <PrivateRoute><MainLayout/></PrivateRoute>,
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
                element: <ProfilePage/>,
            },
            {
                path: '*',
                element: <Navigate to="/" replace/>
            }
        ]
    },
    {
        path: 'auth',
        element: <Navigate to="/auth/signIn"/>,
    },
    {
        path: 'auth/signIn',
        element: <SignInPage/>,
    },
    {
        path: 'auth/signUp',
        element: <SignUpPage/>,
    }
    ]