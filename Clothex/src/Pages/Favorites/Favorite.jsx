import React, { useContext, useEffect, useRef } from 'react'
import './Favorite.css'
import { Link } from 'react-router-dom'
import { ClothContext } from '../../Components/Context/Context'
import Card from '../../Components/Itemcard/Card'
import Cart from '../../Components/Cart/Cart'

function Favorite() {
  const { favorite, setClothes, clothes, currency } = useContext(ClothContext)
  const hasRun = useRef(false);

  useEffect(() => {
    setClothes(favorite);
  }, [favorite, currency])

  if (favorite && !hasRun.current) {
    return (
     <div className='favorite text-black bg-white p-0'>
      <h2 className='text-3xl font-semibold'>Your Favorites</h2>
      <Cart/>
      {favorite.length === 0 && <p className='text-center pt-5'>
          <div className='empty-favorite text-black bg-white'>
            <div className='no-fav w-[60%] h-[300px] text-center rounded-[5px]'>
              <h1 className='md:text-5xl mb-5 underline text-2xl'>No Favorite yet.</h1>
              <Link to={"/shop"} className='text-2xl hover:underline hover:text-[blue]'>Click here to view products.</Link>
            </div>
          </div>
        </p>
      }
      <Card/>
     </div> 
    )
    hasRun.current = true
  }
}

export default Favorite
