import {Component} from "react";
import {Loader} from "../../shared/ui/Loader/Loader.jsx";
import {ProductCard} from "../../entities/ProductCard/ProductCard.jsx";
import "./ProductList.scss"

export const ProductList = ({filterSearch, filterCategory, products, isLoad}) => {

    return (
        <>
            <div className="product-container">
                {(isLoad === false || !Array.isArray(products) || products.length === 0) ? <Loader/> : <List filterSearch={filterSearch} filterCategory={filterCategory} products={products} isLoad={isLoad}/> }
            </div>
        </>
    )
}


const List = ({filterSearch, filterCategory, products, isLoad }) => {
    return (
        <>
            <ul className="product-container__product-list">
                {products
                    .filter((product) => {
                        if (filterCategory === 0) {
                            return product;
                        } else if (filterCategory !== 0 && product.attributes.category.data.id === filterCategory) {
                            return product;
                        }
                    })
                    .filter((product) => {

                        if (filterSearch === '') {
                            return product;
                        } else if (filterSearch !== '' && product.attributes.title.toLowerCase().includes(filterSearch)) {
                            return product;
                        }
                    })
                    .map((product, index) => (
                    <li className="product-list__item" key={index}>
                        <ProductCard product={product} key={index} isLoad={isLoad}/>
                    </li>
                ))}
            </ul>
        </>
    )
}