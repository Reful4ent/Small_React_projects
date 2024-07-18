import {createBrowserRouter, createRoutesFromElements, Router} from "react-router-dom";
import {DayPage, HomePage, ErrorPage} from "./lazyPages.jsx";
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