import React from "react"
import PropTypes from "prop-types"
import {Context} from "../Context"

function CartItem({item}) {

    const [hovered, setHovered] = React.useState(false)

    const {removeFromCart} = React.useContext(Context)
    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i 
                className={iconClassName} 
                onClick={() => removeFromCart(item.id)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >

            </i>
            <img src={item.url} width="130px" alt=""/>
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem















// --------------------------V1, PERFECT-------------------------

//Homie just wanted to use Custom Hooks, but it's really not necessary.


// import React from "react"
// import PropTypes from "prop-types"
// import {Context} from "../Context"

// function CartItem({item}) {

//     const [hovered, setHovered] = React.useState(false)

//     const {removeFromCart} = React.useContext(Context)
//     const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

//     return (
//         <div className="cart-item">
//             <i 
//                 className={iconClassName} 
//                 onClick={() => removeFromCart(item.id)}
//                 onMouseEnter={() => setHovered(true)}
//                 onMouseLeave={() => setHovered(false)}
//             >

//             </i>
//             <img src={item.url} width="130px" />
//             <p>$5.99</p>
//         </div>
//     )
// }

// CartItem.propTypes = {
//     item: PropTypes.shape({
//         url: PropTypes.string.isRequired
//     })
// }

// export default CartItem