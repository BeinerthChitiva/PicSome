import React from "react"
import PropTypes from "prop-types"
import { Context } from "../Context"

//The img being received, comes from the Photos component.
//It's the full Image Object, so we can Access URL, isFavorite... attributes.
function Image({className, img}) {

    const [hovered, setHovered] = React.useState(false)
    const {toggleFavorite} = React.useContext(Context)
    const {addToCart} = React.useContext(Context)
    const {cartItems, removeFromCart} = React.useContext(Context)

    function heartIcon(){
        if(img.isFavorite){
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if (hovered){
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    function cartIcon(){
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if (alreadyInCart){
            return <i className="ri-shopping-cart-fill cart"onClick={() => removeFromCart(img.id)}></i>
        } else if (hovered){
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`${className} image-container`}
        >
            <img src={img.url} className="image-grid" alt=""/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image


















// -------------------------V1-----------------------------------

// import React from "react"
// import { Context } from "../Context"


// //The img being received, comes from the Photos component.
// //It's the full Image Object, so we can Access URL, isFavorite... attributes.
// function Image({className, img}) {

//     const [hovered, setHovered] = React.useState(false)
//     const {toggleFavorite} = React.useContext(Context)

//     const heartIcon = hovered && <i onClick={() => toggleFavorite(img.id)} className="ri-heart-line favorite"></i>
//     const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>

//     const heartFilled = img.isFavorite && <i className="ri-heart-fill favorite"></i>

//     return (
//         <div
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => setHovered(false)}
//             className={`${className} image-container`}
//         >
//             <img src={img.url} className="image-grid"/>
//             {heartIcon}
//             {cartIcon}
//             {heartFilled}
//         </div>
//     )
// }

// export default Image