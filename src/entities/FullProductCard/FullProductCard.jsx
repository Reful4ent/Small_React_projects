

export const FullProductCard = ({product}) => {
    return (
        <>
            <div className="card-body">
                <div className="product-images">

                </div>
                <div className="product-image-current">

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