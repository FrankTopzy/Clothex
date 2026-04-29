import React, { useContext } from 'react'
import Styles from "./navbar.module.css"
import fave from '../../assets/icons/bookmark-heart.png'
import loginIcon from '../../assets/icons/laptop.png'
import storeIcon from '../../assets/icons/store-alt.png'
import shopIcon from '../../assets/icons/shopping-bag-alt.png'
import { Link } from 'react-router-dom'
import { ClothContext } from '../Context/Context'

function MiniNavbar() {
  const { sidebar, setSidebar } = useContext(ClothContext);

  const handleSidebar = () => {
    setSidebar(false);
    //console.log("clicked")
    scrollTo(0, 0);
  }

  return (
    <div className={`${Styles.sidebar} ${sidebar ? Styles.show_sidebar : ""} bg-white text-black fixed z-20 w-full top-[55px]`}>
      <Link to={"/shop"} onClick={handleSidebar}>
        <img src={shopIcon} alt="" />
        <span>Shop</span>
      </Link>

      <Link to={"/store"} onClick={handleSidebar}>
        <img src={storeIcon} alt="" />
        <span>Our Store</span>
      </Link>

      <Link to={"/favorite"} onClick={handleSidebar}>
        <img src={fave} alt="" />
        <span>Favorite</span>
      </Link>

      <Link to={"/login"} onClick={handleSidebar}>
        <img src={loginIcon} alt="" />
        <span>Login</span>
      </Link>

      <Link to={"/about"} onClick={handleSidebar}>
        <img src={shopIcon} alt="" />
        <span>About Us</span>
      </Link>
    </div>
  )
}

export default MiniNavbar
