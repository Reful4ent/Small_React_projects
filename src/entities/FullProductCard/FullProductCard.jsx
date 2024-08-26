import {useState} from "react";
import "./FullProductCard.scss"

export const FullProductCard = ({product}) => {

    const [currentImg, setCurrentImg] = useState(product.images[0]);

    const handleImageClick = (image) => {
        setCurrentImg(image);
    }


    return (
        <>
            <div className="card-body">
                <div className="product-images">
                    {product.images.map((image, index) => (
                        <img className="product-image" key={index} src={image} onClick={() => handleImageClick(image)}/>
                    ))}
                </div>
                <div className="product-image-current">
                    <img className="product-image current" src={currentImg} alt={product.title} />
                </div>
                <div className="product-info">
                    <p className="product-card__text title">{product.title}</p>
                    <p className="product-card__text description">{product.description}</p>
                    <p className="product-card__text category">{product.category.name}</p>
                    <p className="product-card__text price">Price: <br/>$ {product.price}</p>
                    <button className="product-card__add-btn">Add</button>
                </div>
            </div>
        </>
    )
}