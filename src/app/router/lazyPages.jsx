import { lazy } from "react";


export const HomePage = lazy(() => import('/src/pages/HomePage/HomePage'));
export const DayPage = lazy(() => import('/src/pages/DayPage/DayPage'));
export const ErrorPage = lazy(() => import('/src/pages/ErrorPage/ErrorPage'))