import {useEffect} from "react";
import {fetchAllItems} from "../../shared/api/fetchShop.js";


export default function HomePage(){

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