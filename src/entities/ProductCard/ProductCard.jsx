import {Loader} from "../../shared/ui/Loader/Loader.jsx";
import "./ProductCard.scss"

export const ProductCard = ({ product, isLoad }) => {

    console.log("Product Card", product);

    return (
        <>
            <div className="product-card">
                {(isLoad === false || typeof product === "undefined") ? <Loader/> : <CardInfo product={product}/>}
            </div>
        </>
    )
}


export const CardInfo = ({product}) => {
    return (
        <>
            <img className="product-card__image" src={product.images[0]} alt={product.name}/>
            <p className="product-card__text title">{product.title}</p>
            <p className="product-card__text description">{product.description}</p>
            <p className="product-card__text category">{product.category.name}</p>
            <p className="product-card__text price">Price: <br/>$ {product.price}</p>
            <button className="product-card__add-btn">Add</button>
        </>
    )
}