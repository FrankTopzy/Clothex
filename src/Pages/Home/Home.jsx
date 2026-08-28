import React, { use, useContext, useEffect, useState } from 'react'
import './Home.css'
import homeBanner from '../../assets/bg-img/bg-1.jpg'
import { Link } from 'react-router-dom'
import Card from '../../Components/Itemcard/Card'
import searchIcon from '../../assets/icons/search_24dp_00000_FILL0_wght400_GRAD0_opsz24.png'
import { ClothContext } from '../../Components/Context/Context'
import { products } from '../../Data/product'
import { baseCurrency } from '../../Services/formatCurrency'
import spinner from '../../assets/spinner.gif'
import addToCartBtn from '../../assets/icons/shopping_bag_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png';


function Home() {
  const {cartRef, cart, count,setCount, removeFromCart, currency, setClothes, clothes, loading, addToCart} = useContext(ClothContext)
  const [search, setSearch] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([])

  const handleSearch = useEffect((cloth) => {

    //if (!search.trim()) return
    //if (loading) return

    //setLoading(true)

    setFilteredSearch(products.filter((cloth) => {
      if (search.trim() !== "") {return cloth.name.toLowerCase().includes(search.trim().toLowerCase())}
      
    }))
  }, [search])

    const addToCartClick = (cloth) => {
      addToCart(cloth)
    }
  
  

  return (
    <div className='home'>
      {loading && <div className='fixed w-full h-screen bg-white left-0 z-50 flex items-center justify-center'><img src={spinner} alt="" className='w-[70px]'/></div>}
      {/*------------------------------------------------------------------------------------------------------ MAIN SECTION ------------------------------------------------------------------------------------------------*/}
      <div className="hero">
        <div className="search-container w-[30%]">
          <div className='bg-white flex items-center gap-1 rounded-3xl mb-1'>
            <input type="search" className='search-input flex-1 py-3 pl-5 border-0 outline-none text-black' placeholder='Search Product.........' onChange={(e) => setSearch(e.target.value)} value={search}/>
            <button className='w-[40px]' ><img src={searchIcon} alt="" className='w-[40px] p-2'/></button>
          </div>
          
          <div className="search-result max-h-[400px] overflow-auto">
            {search.length > 0 &&
              filteredSearch.slice(0, 5).map((cloth) => {
                let clothPrice = cloth.price;
                //console.log(cloth.id)
            
                if (currency.name === "ngn") {
                  clothPrice = cloth.price;
                }
                else if (currency.name === "usd") {
                  clothPrice = baseCurrency(clothPrice).toFixed()
                }

                return (
                  <div key={cloth.id} className='relative'>
                    <Link to={`/cloth/${cloth.id}`} className="search-item-details bg-white text-black px-4 py-2 flex items-center justify-between gap-4 w-full my-4 text-left">
                      <img src={cloth.image} alt="image" width="80px"/>
        
                      <div className='cart-info flex-1'>
                        <p>{cloth.name}</p>
                        <p className='my-2'>{currency.symbol} {((clothPrice)).toLocaleString()}</p>
                        <p className='text-sm text-gray-400'>{cart.some(cartItem => cartItem.id === cloth.id) ? 'Already in cart.' : 'Not in cart yet.'} </p>
                      </div>
                    </Link>

                    <button className='bg-black p-2 rounded-full flex justify-center absolute top-[33%] right-2' onClick={() => {addToCartClick(cloth); alert('Added!')}}>
                      <img src={addToCartBtn} alt="" />
                    </button>
                  </div>
                  
                )
              })
            }
          </div>
          
        </div>

        <Link className='absolute bottom-4 ' to={"/shop"} onClick={() => scrollTo(0, 0)} >EXPLORE OUR NEW COLLECTION</Link>
      </div>

      <div className="products-container px-[3%] py-[40px] bg-white text-black min-h-screen">
        <div className="heading flex justify-between mb-6">
          <p>NEW IN</p>
          <p>EXPLORE NOW</p>
        </div>

        <Card/>
      </div>
    </div>
  )
}

export default Home