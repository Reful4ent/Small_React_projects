import {lazy, useCallback, useEffect, useState} from "react";
import {fetchAllItems, fetchCategories} from "../../shared/api/fetchShop.js";
import {ProductCard} from "../../entities/ProductCard/ProductCard.jsx";
import "./ProductPage.scss"
import {ProductList} from "../../widgets/ProductList/ProductList.jsx";
import {useLocation, useSearchParams} from "react-router-dom";

export const ProductsPage = () => {

    const [listItems, setListItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState(0);
    const [isLoad, setIsLoad] = useState(false);

    const handleCategoryClick = (id) => {
        setCategoryId(id);
        if (id === 0) {

        }
    }

    const [searchParams, setSearchParams] = useSearchParams();

    const fetchData = useCallback(async () => {
        await fetchAllItems().then((response) => {
            setListItems(response.data);
        });
        await fetchCategories().then((response) => {
            setCategories(response.data);
            setIsLoad(true);
        })
    },[]);


    useEffect( () => {
        setIsLoad(false);
        fetchData();
    }, [fetchData]);

    return (
        <>
            <div className="main">
                <ProductList products={listItems} isLoad={isLoad}/>
                <div className="product-categories">
                    <div className="product-categories-container">
                        <p className="product-categories__text">Categories: </p>
                        <ul className="product-categories__list">
                            <li key={0} className="product-categories__list__item"
                                onClick={() => handleCategoryClick(0)}>All
                            </li>
                            {categories.map((category, index) => (
                                <li key={category.id} className="product-categories__list__item"
                                    onClick={() => handleCategoryClick(category.id)}>{category.attributes.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}