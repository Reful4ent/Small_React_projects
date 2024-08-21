import {HomePage} from "../pages/HomePage/HomePage.jsx";
import "./App.scss"
import {ThemeProvider} from "../features/ThemeProvider/ThemeProvider.jsx";
import {SignInPage} from "../pages/SignInPage/SignInPage.jsx";
import {MainLayout} from "./layouts/mainLayout.jsx";


export default function App() {
    return (
        <>
            <ThemeProvider>
                <MainLayout children={<SignInPage/>}/>
            </ThemeProvider>
        </>
    )
}
