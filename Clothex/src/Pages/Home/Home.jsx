import React, { use, useContext, useEffect, useState } from 'react'
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
  const {cartRef, cart, count,setCount, removeFromCart, currency, setClothes, clothes} = useContext(ClothContext)
  const [loading, setLoading] = React.useState(true);
  const [search, setSearch] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([])

  const handleSearch = useEffect((cloth) => {

    //if (!search.trim()) return
    //if (loading) return

    //setLoading(true)

    setFilteredSearch(products.filter((cloth) => {
      return cloth.name.toLowerCase().includes(search.toLowerCase())
    }))

    console.log(filteredSearch)
  }, [search])
  
  

  return (
    
    <div className='home'>
      {<Cart/>}
      {/*------------------------------------------------------------------------------------------------------ MAIN SECTION ------------------------------------------------------------------------------------------------*/}
      <div className="hero">
        <img src={homeBanner} alt="" className='w-full'/>

        <div className="search-container w-[30%]">
          <div className='bg-white flex items-center gap-1 rounded-3xl'>
            <input type="search" className='search-input flex-1 py-3 pl-5 border-0 outline-none text-black' placeholder='Search Product.........' onChange={(e) => setSearch(e.target.value)} value={search}/>
            <button className='w-[40px]' ><img src={searchIcon} alt="" className='w-[40px] p-2'/></button>
          </div>
          

          {search.length > 0 &&
            filteredSearch.slice(0, 3).map((cloth) => {
              let clothPrice = cloth.price;
              //console.log(cloth.id)
          
              if (currency.name === "ngn") {
                clothPrice = cloth.price;
              }
              else if (currency.name === "usd") {
                clothPrice = baseCurrency(clothPrice).toFixed()
              }

               return (
                <div className="search-item-details bg-white text-black px-4 py-2 flex items-center justify-between gap-4 w-full my-4 text-left" key={cloth.id}>
                <img src={cloth.image} alt="image" width="80px"/>
    
                <div className='cart-info flex-1'>
                  <p>{cloth.name}</p>
                  <p className='my-2'>{currency.symbol} {((clothPrice)).toLocaleString()}</p>
                </div>
              </div>
              )
            })
          }
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