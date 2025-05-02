import React, { useContext } from 'react'
import './Cart.css'
import { ClothContext } from '../Context/Context';
import { baseCurrency, closeCart } from '../../Services/formatCurrency';
import closeIcon from '../../assets/icons/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png'
import deleteIcon from '../../assets/icons/delete_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png'


function Cart() {
  const {cartRef, cart, count, setCount, removeFromCart, currency, cartId} = useContext(ClothContext)


  let total = 0;

  cart.forEach((cloth) => {
    if (currency.name === "ngn") {
      total += cloth.price * count;
    } else if (currency.name === "usd") {
      total += baseCurrency(cloth.price) * count;
    }
  })

  /*--------------------------------------------------------------------------------- CART CONTAINER -----------------------------------------------------------------------------------------------------*/
  return (
    <div className="cart bg-white text-black fixed top-0 right-[-100%] w-[375px] z-50 h-screen py-8 px-4 shadow-lg overflow-auto text-center" id='cart' ref={cartRef}>
        <h1 className='text-4xl font-semibold'>Your Cart</h1>

        {cart.length === 0 && <p className='text-center pt-5'>Your cart is empty</p>}

        {
          cart.map((cloth, index) => {
            return(
              <div className="cart-item-details flex items-center justify-between gap-4 w-full my-4 text-left" key={index}>
                <img src={cloth.image} alt="" width="80px"/>

                <div className='cart-info flex-1'>
                  <p>{cloth.name}</p>
                  <p className='my-2'>{currency.symbol} {currency.name === "usd" ? baseCurrency(cloth.price) : cloth.price.toLocaleString()}</p>
                  <div className="quantity">
                    <button onClick={() => {count > 1 && setCount(c => c - 1)}}>-</button>
                    <span className='mx-3'>{count}</span>
                    <button  onClick={() => {setCount(c => c + 1);}}>+</button>
                  </div>
                </div>

                <img src={deleteIcon} alt="" className='bg-black rounded-full p-1 cursor-pointer' onClick={() => removeFromCart(cloth.id)}/>
              </div>
            )
          })
        }

        <hr className='bg-gray-400 border-0 h-[1px]'/>
        
        <p className='text-right'>Total: {currency.symbol} {total.toLocaleString()}</p>
        <button className='bg-black text-white py-2 px-4'>Buy now</button>

        
        <img src={closeIcon} alt="" className='bg-black absolute top-[10px] right-[10px] cursor-pointer' onClick={() => {cartRef.current.style.right = '-100%'}}/>
      </div>
  )
}

export default Cart
