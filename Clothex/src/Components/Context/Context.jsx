import React, { createContext, use, useEffect, useState } from 'react'

export const ClothContext = createContext();

const ClothContextProvider = (props) => {
  const cartRef = React.useRef();
  const [clothes, setClothes] = useState([]);
  const [currency, setCurrency] = useState({
    name: 'ngn',
    symbol: '₦'
  });
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [count, setCount] = React.useState(1)

  //---------------------------------------------------------------------------------HANDLES CART OPERATIONS -------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    const storedCart = localStorage.getItem("cart")

    if (storedCart) setCart(JSON.parse(storedCart))
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])

  const addToCart = (cloth) => {
    cart.forEach((item) => {
      if (item.id === cloth.id) {
        window.alert("item already in cart")
      }
    })

    if(!cart.includes(cloth)) {
      setCart(prev => [...prev, cloth])
    }
  }

  const removeFromCart = (clothId) => {
    setCart(prev => prev.filter(cloth => cloth.id !== clothId))
    setCount(1)
  }

  //---------------------------------------------------------------------------------HANDLES FAVORITE OPERATIONS -----------------------------------------------------------------------------------------------------------

  useEffect(() => {
    const storedFavorite = localStorage.getItem("favorite")

    if (storedFavorite) setFavorite(JSON.parse(storedFavorite))
  }, [])

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite))
  }, [favorite])

  const addToFavorite = (cloth) => {
    setFavorite(prev => [...prev, cloth])
  }

  const removeFromFavorite = (clothId) => {
    setFavorite(prev => prev.filter(cloth => cloth.id !== clothId))
  }

  const isFavorite = (clothId) => {
    return favorite.some(cloth => cloth.id == clothId)
  }

  //--------------------------------------------------------------------------------- PROP VALUES -----------------------------------------------------------------------------------------------------------
  const value = {
    cartRef,
    currency,
    setCurrency,
    cart,
    setCart,
    addToCart,
    removeFromCart,
    count,
    setCount,
    clothes,
    setClothes,
    favorite,
    addToFavorite,
    removeFromFavorite,
    isFavorite,
  }

  return (
    <ClothContext.Provider value={value}>
      {props.children}
    </ClothContext.Provider>
  )
}

export default ClothContextProvider
