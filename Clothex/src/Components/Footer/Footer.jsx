import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer p-5'>
      <div className='footer-container bg-white uppercase text-black'>
        <div className='footer-upper text-[12px]'>
          <div className='max-w-[500px]'>
            <h1>get 10% off your next order</h1>

            <form action="" className='w-full'>
              <input type="text" placeholder='NAME' />
              <input type="email" placeholder="EMAIL" />
              <button onClick={(e) => e.preventDefault()} className='bg-black text-white py-2 px-4 w-full mb-[30px] mt-2'>SUBSCRIBE TO OUR NEWSLETTER</button>
            </form>
            <p>*BY SIGNING UP, YOU AGREE TO RECEIVE EMAILS ABOUT Clothex AND OUR OTHER TERMS.</p>
          </div>

          <div>
            <h1>Shop here</h1>

            <p>All Items</p>
            <p>Male</p>
            <p>Female</p>
            <p>Accessories</p>
            <p>Collections</p>
          </div>

          <div>
            <h1>Quick Links</h1>

            <p>About us</p>
            <p>OUR WALK-IN STORE</p>
            <p>Faqs</p>
            <p>Policies</p>
            <p>Your account</p>
          </div>

          <div className='contact-us'>
            <h1>Contact</h1>

            <p>Shop 38/39, Aaron’s Lekki Mall, Admiralty way, Lagos, Nigeria.</p>
            <p>Operating hours: Monday – Saturday (10am -10pm) Sunday (12pm-10pm)</p>
            <p>+2349131058119</p>

            <div className='scoial-media'>
              <Link to="/">Clothex</Link>
            </div>
          </div>
        </div>

        <div className='display flex justify-between items-center py-[40px] px-[100px]'>
          <p className='text-[12px]'>© 2025 CLothex by FRANK All Rights Reserved</p>
          <Link to={"/"} className='text-2xl font-semibold'>CLOTHEX</Link>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Footer)
