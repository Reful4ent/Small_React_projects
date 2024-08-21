import {lazy} from "react";


export const HomePage = lazy(() => import('/src/pages/HomePage/HomePage').then(m => ({default: m.HomePage})));
export const ProductsPage = lazy(() => import('/src/pages/ProductsPage/ProductsPage').then(m => ({default: m.ProductsPage})));
export const AboutPage = lazy(() => import('/src/pages/AboutPage/AboutPage').then(m => ({default: m.AboutPage})));
export const ErrorPage = lazy(() => import('/src/pages/ErrorPage/ErrorPage').then(m => ({default: m.ErrorPage})));
export const SignInPage = lazy(() => import('/src/pages/SignInPage/SignInPage').then(m => ({default: m.SignInPage})));
export const SignUpPage = lazy(() => import('/src/pages/SignUpPage/SignUpPage').then(m => ({default: m.SignUpPage})));
export const ProfilePage = lazy(() => import('/src/pages/ProfilePage/ProfilePage').then(m => ({default: m.ProfilePage})));