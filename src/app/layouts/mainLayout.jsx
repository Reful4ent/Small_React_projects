import {Header} from "../../widgets/Header/Header.jsx";


export const MainLayout = ({ children }) => {
    return (
        <>
            <Header></Header>
            {children}
        </>
    );
}