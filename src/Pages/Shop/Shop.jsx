import React, { useEffect } from 'react'
import './Shop.css'
import Card from '../../Components/Itemcard/Card'
import { ClothContext } from '../../Components/Context/Context';
import { products } from '../../Data/product';

function Shop() {
  const {clothes, setClothes, currency} = React.useContext(ClothContext);

  function loadMore() {
    setClothes(products.slice(0, clothes.length + 5));
  }

  //const filteredProduct = products.filter(product => product.category === "highFashion").slice(0, 19);



  useEffect(() => {
    setClothes(products.slice(0, 5));
  }, [currency]);

  return (
    <div className='shop min-h-screen bg-white text-black'>
      <h1 className='pb-5 text-2xl text-center sm:text-left font-semibold uppercase'>Shop</h1>
      <Card/>

      <button className='py-2 px-6 text-white bg-black mt-8 flex justify-self-center' onClick={loadMore}>Load More</button>
    </div>
  )
}

export default Shop
