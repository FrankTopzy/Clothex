import React, { createContext, useEffect, useState } from 'react'

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
  }

  return (
    <ClothContext.Provider value={value}>
      {props.children}
    </ClothContext.Provider>
  )
}

export default ClothContextProvider
