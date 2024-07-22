
import {HomePage, DayPage} from "./router/lazyPages.jsx";
import {RouterProvider} from "react-router-dom";
import {router} from "./router/routes.jsx";
import {ThemeProvider} from "../features/ThemeChanger/ThemeChanger.jsx";
import "./styles.css"


const App = () => {
    return (
        <>
            <ThemeProvider>
                <RouterProvider router={router}></RouterProvider>
            </ThemeProvider>
        </>
    )
}

export default App
