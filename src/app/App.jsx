
import { HomePage, DayPage} from "./router/lazyPages.jsx";
import {RouterProvider} from "react-router-dom";
import {router} from "./router/routes.jsx";


//<RouterProvider router={router}></RouterProvider>
const App = () => {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
