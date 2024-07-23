import {useEffect} from "react";
import {fetchAllItems} from "../../shared/api/fetchShop.js";
import {Header} from "../../widgets/Header/Header.jsx";



export default function HomePage(){

    useEffect(() => {
        fetchAllItems().then((responce) => {
            console.log(responce);
        });
    }, []);

    return (
        <>
            <Header></Header>
        </>
    )
}