
import { HomePage, DayPage} from "./router/lazyPages.jsx";
import {RouterProvider} from "react-router-dom";
import {router} from "./router/routes.jsx";



const App = () => {
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}

export default App
