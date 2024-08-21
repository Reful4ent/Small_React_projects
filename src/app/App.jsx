import {HomePage} from "../pages/HomePage/HomePage.jsx";
import "./App.scss"
import {ThemeProvider} from "../features/ThemeProvider/ThemeProvider.jsx";


export default function App() {
    return (
        <>
            <ThemeProvider>
                <HomePage></HomePage>
            </ThemeProvider>
        </>
    )
}
