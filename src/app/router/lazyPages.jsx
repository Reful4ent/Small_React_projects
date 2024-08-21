import {lazy} from "react";


export const HomePage = lazy(() => import('/src/pages/HomePage/HomePage').then(m => ({default: m.HomePage})));
export const ErrorPage = lazy(() => import('/src/pages/ErrorPage/ErrorPage').then(m => ({default: m.ErrorPage})));
export const LoginPage = lazy(() => import('/src/pages/SignInPage/SignInPage').then(m => ({default: m.SignInPage})));