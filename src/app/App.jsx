
import "./App.scss"
import {ThemeProvider} from "../features/ThemeProvider/ThemeProvider.jsx";
import {RouterProvider} from "react-router-dom";
import {router} from "./router/Router.jsx";


export default function App() {
    return (
        <>
            <ThemeProvider>
                <RouterProvider router={router}></RouterProvider>
            </ThemeProvider>
        </>
    )
}
