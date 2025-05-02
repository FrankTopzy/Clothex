import React, { use, useContext, useEffect } from 'react'
import './Home.css'
import homeBanner from '../../assets/bg-img/bg-1.jpg'
import { Link } from 'react-router-dom'
import Card from '../../Components/Itemcard/Card'
import searchIcon from '../../assets/icons/search_24dp_00000_FILL0_wght400_GRAD0_opsz24.png'
import male from '../../assets/Clothes/hf/HF FLOWER SPANDEX WHITE TEE.jpg'
import { ClothContext } from '../../Components/Context/Context'
import { products } from '../../Data/product'
import { baseCurrency } from '../../Services/formatCurrency'
import Cart from '../../Components/Cart/Cart'

function Home() {
  const {cartRef, cart, count,setCount, removeFromCart, currency} = useContext(ClothContext)
  const [loading, setLoading] = React.useState(true);
  

  return (
    
    <div className='home'>
      {<Cart/>}
      {/*------------------------------------------------------------------------------------------------------ MAIN SECTION ------------------------------------------------------------------------------------------------*/}
      <div className="hero">
        <img src={homeBanner} alt="" className='w-full'/>

        <div className="search-container bg-white flex items-center gap-1 rounded-3xl w-[60%]">
          <input type="search" className='search-input flex-1 py-3 pl-5 border-0 outline-none text-black' placeholder='Search Product.........'/>
          <button className='w-[40px]'><img src={searchIcon} alt="" className='w-[40px] p-2'/></button>
        </div>

        <Link className='absolute bottom-4 '>EXPLORE OUR NEW COLLECTION</Link>
      </div>

      <div className="products-container px-[3%] py-[40px] bg-white text-black min-h-screen">
        <div className="heading flex justify-between">
          <p>NEW IN</p>
          <p>EXPLORE NOW</p>
        </div>

        <Card/>
      </div>
    </div>
  )
}

export default Home