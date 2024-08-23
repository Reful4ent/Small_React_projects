import {Component} from "react";
import {Loader} from "../../shared/ui/Loader/Loader.jsx";
import {ProductCard} from "../../entities/ProductCard/ProductCard.jsx";
import "./ProductList.scss"

export const ProductList = ({products, isLoad}) => {

    return (
        <>
            <div className="product-container">
                {(isLoad === false || !Array.isArray(products) || products.length === 0) ? <Loader/> : <List products={products} isLoad={isLoad}/> }
            </div>
        </>
    )
}


const List = ({ products, isLoad }) => {
    return (
        <>
            <ul className="product-container__product-list">
                {products.map((product, index) => (
                    <li className="product-list__item" key={index}>
                        <ProductCard product={product} key={index} isLoad={isLoad}/>
                    </li>
                ))}
            </ul>
        </>
    )
}