import {lazy, useCallback, useEffect, useState} from "react";
import {fetchAllItems} from "../../shared/api/fetchShop.js";
import {ProductCard} from "../../entities/ProductCard/ProductCard.jsx";
import "./ProductPage.scss"
import {ProductList} from "../../widgets/ProductList/ProductList.jsx";

export const ProductsPage = () => {

    const [listItems, setListItems] = useState([]);
    const [isLoad, setIsLoad] = useState(false);

    const fetchData = useCallback(async () => {
        await fetchAllItems().then((response) => {
            setListItems(response);
            setIsLoad(true);
            console.log(response)
        });
    },[]);


    useEffect( () => {
        setIsLoad(false);
        fetchData();
    }, [fetchData]);

    return (
        <>
            <div className="main">
                <ProductList products={listItems} isLoad={isLoad}/>
            </div>
        </>
    )
}