import {Loader} from "../../shared/ui/Loader/Loader.jsx";
import "./ProductCard.scss"
import {Link} from "react-router-dom";

export const ProductCard = ({ product, isLoad }) => {

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
            <Link to={'/products/'+product.id} state={{ product: product }}>
                <img className="product-card__image" src={product.attributes.images[0]} alt={product.name}/>
            </Link>
            <p className="product-card__text title">{product.attributes.title}</p>
            <p className="product-card__text description">{product.attributes.description}</p>
            <p className="product-card__text category">{product.attributes.category.data.attributes.name}</p>
            <p className="product-card__text price">Price: <br/>$ {product.attributes.price}</p>
            <button className="product-card__add-btn">Add</button>
        </>
    )
}