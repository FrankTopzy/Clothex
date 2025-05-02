import React from 'react'
import './Favorite.css'
import { Link } from 'react-router-dom'

function Favorite() {
  return (
    <div className='favorite text-black bg-white'>
      <div className='no-fav w-[60%] h-[300px] text-center rounded-[5px]'>
        <h1 className='md:text-5xl mb-5 underline text-2xl'>No Favorite yet.</h1>
        <Link to={"/shop"} className='text-2xl hover:underline hover:text-[blue]'>Click here to view products.</Link>
      </div>
    </div>
  )
}

export default Favorite
