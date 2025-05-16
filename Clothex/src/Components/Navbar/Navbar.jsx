import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/clothex_logo.png'
import { Link } from 'react-router-dom'
import cartIcon from '../../assets/cart_icon.png'
import { ClothContext } from '../Context/Context'

function Navbar() {
 const navRef = useRef();
 const {setCurrency, currency, cartRef, cart} = React.useContext(ClothContext);

 /*useEffect(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 80) {
     navRef.current.classList.add('nav-bg')
    } else if (window.scrollY > 150) {
      navRef.current.classList.remove('nav-bg')
    }
   })
 }, [])*/

 function currencyHandler(e) {
  switch (e.target.value) {
    case "ngn" : {
      setCurrency({name: "ngn", symbol: '₦'})
      break
    } case "usd" : {
      setCurrency({name: "usd", symbol: "$"})
      break
    } default : {
      setCurrency({name: "ngn", symbol: '₦'})
      break
    }
  }
 }

  return (
    <div className='navbar flex justify-between items-center text-amber-50' ref={navRef}>
      <div className="nav-left flex items-center gap-5">
        <Link to={"/shop"}>SHOP</Link>
        <Link>ABOUT</Link>
        <Link>OUR STORE</Link>
      </div>

      <Link to={"/"} className="logo flex items-center">
        <img src={logo} alt="" className='logo-img w-[60px] h-[50px] bg-white rounded-[50%]'/>
        <p className='text-[20px] font-semibold '>CLOTHEX</p>
      </Link>

      <div className="nav-right flex items-center gap-5">
        <select name="" id="" className='outline-none' onChange={currencyHandler}>
          <option value="ngn">NGN</option>
          <option value="usd">USD</option>
        </select>

        <Link>LOGIN</Link>
        <Link to={"/favorite"}>FAVORITES</Link>
        
        <div className='relative'>
          <img src={cartIcon} alt="" width="40px" onClick={() => {cartRef.current.style.right = '0'} } className="cart-icon cursor-pointer"/> 
          <span className={`absolute top-0 right-[-5px] bg-[red] px-[3px] text-[12px] rounded-full text-center ${cart.length < 1 ? "hidden" : ""}`}>{cart.length }</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
