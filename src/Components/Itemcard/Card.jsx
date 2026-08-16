import React, { useEffect, useState } from 'react'
import './Card.css'
import { products } from '../../Data/product.js'
import { ClothContext } from '../Context/Context.jsx'
import { baseCurrency } from '../../Services/formatCurrency.js';
import addToCartBtn from '../../assets/icons/shopping_bag_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png';
import { Link } from 'react-router-dom';
import LoaderFile from '../Loader/LoaderFile.jsx';


function Card() {
  const {currency, details, setDetails, cart, setCart, addToCart, removeFromCart, setCount, cartRef, clothes, setClothes, isFavorite, removeFromFavorite, addToFavorite, setLoading, imageLoaded, setImageLoaded} = React.useContext(ClothContext);
  const addBtn = React.useRef(null);


  useEffect(() => {
    setLoading(false)
    setClothes(products.slice(0, 10));
  }, [currency]);

  const addToCartClick = (cloth) => {
    addToCart(cloth)
    /*if (!cartProduct) {
      addToCart(cloth);
    } else {
      setCount((prev) => prev + 1);
    }*/
  }

  

  const itemList = clothes.map((cloth) => {

    const favorite = isFavorite(cloth.id);

    function handleFaveBtn() {
      if (favorite) removeFromFavorite(cloth.id)
      else addToFavorite(cloth)

      console.log("clicked");
    }

    let clothPrice = cloth.price;
    //console.log(cloth.id)

    if (currency.name === "ngn") {
      clothPrice = cloth.price;
    }
    else if (currency.name === "usd") {
      clothPrice = baseCurrency(clothPrice).toFixed()
    }

    return (
      <div className='card' key={cloth.id}>
        <div className='img relative'>
          <div className='sm:h-100 h-full relative'>
            {!imageLoaded &&  <div className='flex items-center justify-center absolute w-full h-full'><LoaderFile /></div>}
            <img src={cloth.image} alt={cloth.name} onLoad={() => setImageLoaded(true)} className='cloth-img'/>
          </div>
          <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={handleFaveBtn}>♥</button>
        </div>

        <div className='display flex justify-between items-center'>
          <div className="cloth-details py-2 px-2">
            <p className='cloth-name'>{cloth.name}</p>
            <p className='cloth-price'>{currency.symbol} {((clothPrice)).toLocaleString()}</p>
            <p className='text-sm text-gray-400 capitalize'>{cart.some(cartItem => cartItem.id === cloth.id) ? 'Already in Cart!' : 'Not in Cart yet!'}</p>
          </div>

          <button className='bg-black p-2 rounded-full flex justify-center' onClick={() => {addToCartClick(cloth); alert('Added!')}} ref={addBtn}>
            <img src={addToCartBtn} alt="" />
          </button>
        </div>
        <Link to={`/cloth/${cloth.id}`} onClick={() => scrollTo(0, 0)} className='bg-black text-white py-2.5 text-center'> View Details</Link>
      </div>
    )
  })

  return (
    <div className='card-container'>
      {itemList}
    </div>
  )
}

export default Card
