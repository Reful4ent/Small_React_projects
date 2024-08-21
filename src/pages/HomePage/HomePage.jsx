import {useEffect} from "react";
import {fetchAllItems} from "../../shared/api/fetchShop.js";
import {Header} from "../../widgets/Header/Header.jsx";



export const HomePage = () =>{

    useEffect(() => {
        fetchAllItems().then((responce) => {
            console.log(responce);
        });
    }, []);

    return (
        <>

        </>
    )
}