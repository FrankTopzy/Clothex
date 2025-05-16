import React, { useEffect, useState } from 'react'
import './Card.css'
import { products } from '../../Data/product.js'
import { ClothContext } from '../Context/Context.jsx'
import { baseCurrency } from '../../Services/formatCurrency.js';
import favIcon from '../../assets/heart-line.svg'
import addToCartBtn from '../../assets/icons/shopping_bag_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png';
import { Link } from 'react-router-dom';

function Card() {
  const {currency, details, setDetails, cart, setCart, addToCart, removeFromCart, setCount, cartRef, clothes, setClothes, isFavorite, removeFromFavorite, addToFavorite} = React.useContext(ClothContext);
  const [loading, setLoading] = React.useState(true);
  const addBtn = React.useRef(null);


  useEffect(() => {
    setClothes(products.slice(0, 10));
    setLoading(false);
  }, [currency]);

  const addToCartClick = (cloth) => {
    addToCart(cloth)
    /*if (!cartProduct) {
      addToCart(cloth);
    } else {
      setCount((prev) => prev + 1);
    }*/
  }

  

  const itemList = clothes.map((cloth, index) => {

    const favorite = isFavorite(cloth.id)

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
      <div className='card' key={index}>
        {loading && <div>Loading....</div>}

        <div className='img relative'>
          <img src={cloth.image} alt={cloth.name} className='cloth-img'/>
          <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={handleFaveBtn}>♥</button>
        </div>

        <div className='display flex justify-between items-center'>
          <div className="cloth-details py-2 px-2">
            <p className='cloth-name'>{cloth.name}</p>
            <p className='cloth-price'>{currency.symbol} {((clothPrice)).toLocaleString()}</p>
          </div>

          <button className='bg-black p-2 rounded-full flex justify-center' onClick={() => {addToCartClick(cloth); cartRef.current.style.right = '0'}} ref={addBtn}>
            <img src={addToCartBtn} alt="" />
          </button>
        </div>
        <Link to={`/cloth/${cloth.id}`} className='bg-black text-white py-2.5 text-center'> View Details</Link>
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
