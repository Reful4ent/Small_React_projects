import "./CategoriesInput.scss"
import {Component} from "react";




export const CategoriesInput = ({categories, handleCategoryClick}) => {

    return (
        <>
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
        </>
    )
}