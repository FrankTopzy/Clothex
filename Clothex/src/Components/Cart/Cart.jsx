import React, { useContext } from 'react'
import './Cart.css'
import { ClothContext } from '../Context/Context';
import { baseCurrency } from '../../Services/formatCurrency';
import closeIcon from '../../assets/icons/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png'
import deleteIcon from '../../assets/icons/delete_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png'


function Cart() {
  const {cartRef, cart,setCart, removeFromCart, currency, cartId} = useContext(ClothContext)


  let total = 0;

  cart.forEach((cloth) => {
    if (currency.name === "ngn") {
      total += cloth.price * cloth.count;
    } else if (currency.name === "usd") {
      total += baseCurrency(cloth.price) * cloth.count;
    }
  })

  const handleCountChange = (id, action) => {// When updating state in React, it's a good practice to use the set function provided by useState to ensure that state updates are handled correctly and consistently.
        setCart(prevCart =>
            prevCart.map(item => {
                if (item.id === id) {
                    if (action === 'increment') {
                        return { ...item, count: item.count + 1 };
                    } else if (action === 'decrement' && item.count > 1) {
                        return { ...item, count: item.count - 1 };
                    }
                }
                return item;
            })
        );
    };


  /*--------------------------------------------------------------------------------- CART CONTAINER -----------------------------------------------------------------------------------------------------*/
  return (
    <div className="cart bg-white text-black fixed top-0 right-[-200%] w-[375px] z-50 h-screen py-8 px-4 shadow-lg overflow-auto text-center" id='cart' ref={cartRef}>
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
                    <button onClick={() => {handleCountChange(cloth.id, 'decrement')}}>-</button>
                    <span className='mx-3'>{cloth.count}</span>
                    <button  onClick={() => {handleCountChange(cloth.id, 'increment')}}>+</button>
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

        
        <img src={closeIcon} alt="" className='bg-black absolute top-[10px] right-[10px] cursor-pointer' onClick={() => {cartRef.current.style.right = '-200%'}}/>
      </div>
  )
}

export default Cart
