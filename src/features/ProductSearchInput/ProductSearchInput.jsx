import {GlassSVG} from "../../shared/ui/SVGComponents/Glass/GlassSVG.jsx";
import "./ProductSearchInput.scss"

export const ProductSearchInput = ({onSubmit}) => {
    return (
        <>
            <div className="product-search-container">
                <form className="product-search" autoComplete="off" onSubmit={onSubmit}>
                    <input className='product-search__input' placeholder='Search...' type='search' name='search'/>
                    <button className="product-search__btn" type="submit"><GlassSVG/></button>
                </form>
            </div>
        </>
    )
}