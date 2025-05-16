import React, { use, useContext, useState } from 'react'
import { products } from '../../Data/product.js'
import Styles from "./Cloth.module.css"
import checkbox from '../../assets/icons/checkbox.png'
import plus from '../../assets//icons/plus.png'
import clo from '../../assets/Clothes/hf/HF FLOWER SPANDEX WHITE TEE.jpg'
import { ClothContext } from '../../Components/Context/Context'
import { useParams } from 'react-router-dom'

function Cloth() {
  const {currency, addToCart, isFavorite, removeFromFavorite, addToFavorite } = useContext(ClothContext);
  const [isOpen, setIsOpen] = useState({});
  const { id } = useParams();


  const clothInformation = products.filter((cloth) => cloth.id === id);
  const favorite = isFavorite(clothInformation[0].id)

  const handleFaveBtn = () => {
    if (favorite) removeFromFavorite(clothInformation[0].id)
    else addToFavorite(clothInformation[0])
  }

//src\assets\Clothes\hf\HF FLOWER SPANDEX WHITE TEE.jpg
  const clothInfo = [{
    heading: "Product Details",
    content: "Latex luxury in Black, Red, White, Orange, or Black/White. Bold ‘Brand Logo’ logo and exquisite shoulder/sleeve detailing. Make a statement effortlessly."
  }, {
    heading: "Shipping & Returns",
    content: ["– Standard Shipping 6 working days", "– Express Shipping 3-4 working days", "– Free returns in 30 days"]
  },]

  const clothInfoHTML = clothInfo.map((clothInfo, index) => {
    return (
      <div className='max-w-[400px] border-b-2 border-gray-500 p-3 h-[50px]' key={index}>
            <p className='flex items-center justify-between'>
                <span>{clothInfo.heading}</span>
                <button onClick={() => {}}><img src={plus} alt="" width={"30px"} /></button>
            </p>
            <div className={`${Styles.detail} text-[14px] text-[grey] mt-2`}>
                {Array.isArray(clothInfo.content) ? (
                    <ul>
                        {clothInfo.content.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{clothInfo.content}</p>
                )}
            </div>
        </div>

    )
  })



  return (
    <div className={`${Styles.cloth_container} min-h-[100vh] bg-white text-black flex mt-[100px] justify-between items-center px-9 uppercase`}>
      <div className={`${Styles.left_hand} w-[400px]`}>
        <div className='flex justify-between max-w-[400px] items-center mb-[40px]'>
          <p className='flex flex-col'>
            <span>{clothInformation[0].name}</span>
            <span>{currency.symbol} {(clothInformation[0].price).toLocaleString()}</span>
          </p>

          <button className={`${Styles.favorite} ${favorite ? `${Styles.red}` : ""} bg-black w-8 rounded-full text-2xl`} onClick={handleFaveBtn}>♥</button>
        </div>

        {clothInfoHTML}
      </div>

      <div className={`${Styles.middle} flex-1 flex justify-center`}>
        <img src={clo}  alt={clothInformation[0].name} width={600}/>
      </div>

      <div className={`${Styles.right_hand} w-[400px]`}>
        <p>Select Color</p>

        <img src={checkbox} alt="" className='my-1.5'/>

        <button className='w-full bg-[grey] py-2.5 my-4 cursor-not-allowed' onClick={() => addToCart(clothInformation[0])}>Add To Cart</button>

        <select name="" id="" className='w-full'>
          <option value="Select Size">Select Size</option>
          <option value="Select Size">S</option>
          <option value="Select Size">M</option>
          <option value="Select Size">XL</option>
          <option value="Select Size">XXL</option>
          <option value="Select Size">XXXL</option>
        </select>
      </div>
    </div>
  )
}

export default Cloth
