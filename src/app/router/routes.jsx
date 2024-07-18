import {createBrowserRouter, createRoutesFromElements, Router} from "react-router-dom";
import {DayPage, HomePage} from "./lazyPages.jsx";
import ErrorPage from "../../pages/ErrorPage/ErrorPage.jsx";
import MainLayout from "../layouts/MainLayout.jsx";


export const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '',
                element: <HomePage/>
            },
            {
                path: 'weatherDay/:weatherId',
                element: <DayPage/>,
            }
        ]
    },
])