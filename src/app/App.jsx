
import "./App.scss"
import {ThemeProvider} from "../features/ThemeProvider/ThemeProvider.jsx";
import {RouterProvider, useRoutes} from "react-router-dom";
import {router} from "./router/Router.jsx";
import {AuthProvider} from "./context/AuthProvider.jsx";


export default function App() {
    return (
        <>
            <ThemeProvider>
               <AuthProvider>
                   {useRoutes(router)}
               </AuthProvider>
            </ThemeProvider>
        </>
    )
}
