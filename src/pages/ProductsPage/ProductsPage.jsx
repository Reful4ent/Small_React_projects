import {lazy, useCallback, useEffect, useState} from "react";
import {fetchAllItems, fetchCategories} from "../../shared/api/fetchShop.js";
import {ProductCard} from "../../entities/ProductCard/ProductCard.jsx";
import "./ProductPage.scss"
import {ProductList} from "../../widgets/ProductList/ProductList.jsx";
import {useLocation, useSearchParams} from "react-router-dom";
import {GlassSVG} from "../../shared/ui/SVGComponents/Glass/GlassSVG.jsx";
import {CategoriesInput} from "../../features/CategoriesProduct/CategoriesInput.jsx";
import {ProductSearchInput} from "../../features/ProductSearchInput/ProductSearchInput.jsx";

export const ProductsPage = () => {

    const [listItems, setListItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState(0);
    const [isLoad, setIsLoad] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const categoryIdQuery = searchParams.get("categoryId") || '';
    const searchQuery = searchParams.get("searchQuery") || '';

    const handleCategoryClick = (id) => {
        setCategoryId(id);
        setSearchParams({categoryId: id});
    }

    const handleSearchClick = (e) =>{
        e.preventDefault()

        const form = e.target;
        const query = form.search.value.toLowerCase();
        setSearchParams({categoryId: categoryId, searchQuery: query});
    }



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
                <ProductSearchInput onSubmit={handleSearchClick}/>
                <ProductList filterSearch={searchQuery} filterCategory={Number(categoryIdQuery)} products={listItems}
                             isLoad={isLoad}/>
                <CategoriesInput handleCategoryClick={handleCategoryClick} categories={categories} />
            </div>
        </>
    )
}