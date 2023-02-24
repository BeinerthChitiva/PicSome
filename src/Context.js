import React, { useEffect } from "react"

const Context = React.createContext()

//We destructured the incoming props of ContextProvider into children.

function ContextProvider({children}){

    const [allPhotos, setAllPhotos] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setAllPhotos(data))
    }, [])

    function toggleFavorite(id){
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            } 
            return photo
        })
        setAllPhotos(updatedArr)
    }

    function addToCart(newItem){
        setCartItems(prevItems => [...prevItems, newItem])
    }

    function removeFromCart(id){
        setCartItems(prevItems => prevItems.filter(
            item => item.id !== id
        ))
    }

    function emptyCart(){
        setCartItems([])
    }

    console.log(cartItems)


    return(
        <Context.Provider value={{allPhotos, toggleFavorite, addToCart, cartItems, removeFromCart, emptyCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}