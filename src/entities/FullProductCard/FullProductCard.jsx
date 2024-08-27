import {useState} from "react";
import "./FullProductCard.scss"

export const FullProductCard = ({product}) => {

    const [currentImg, setCurrentImg] = useState(product.attributes.images[0]);

    const handleImageClick = (image) => {
        setCurrentImg(image);
    }


    return (
        <>
            <div className="card-body">
                <div className="product-images">
                    {product.attributes.images.map((image, index) => (
                        <img className="product-image" key={index} src={image} onClick={() => handleImageClick(image)}/>
                    ))}
                </div>
                <div className="product-image-current">
                    <img className="product-image current" src={currentImg} alt={product.title} />
                </div>
                <div className="product-info">
                    <p className="product-card__text title">{product.attributes.title}</p>
                    <p className="product-card__text description">{product.attributes.description}</p>
                    <p className="product-card__text category">{product.attributes.category.data.attributes.name}</p>
                    <p className="product-card__text price">Price: <br/>$ {product.attributes.price}</p>
                    <button className="product-card__add-btn">Add</button>
                </div>
            </div>
        </>
    )
}