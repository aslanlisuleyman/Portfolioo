import React from 'react'
import './HomeHeader.css'

const HomeHeader = () => {
  return (
    <div className='home'>
      <div className='home__header'>
        <div className='home__header__1'>
          <img className='home__header__1__img' src="https://htmldemo.net/pustok/pustok/image/logo.png" alt="" />
          <div className='home__header__1__div1'>
            <i class="fa-solid fa-headphones" style={{color: "#1fc913"}}></i>
            <div>
              <p>Free Support 24/7</p>
              <p>+01-202-555-0181</p>
            </div>
          </div>
          <div className='home__header__1__pages'>
            <p>HOME <i class="fa-solid fa-chevron-down" style={{color: "#000000;"}}></i></p>
            <p>PAGES <i class="fa-solid fa-chevron-down"  style={{color: "#000000;"}}></i></p>
            <p>SHOP <i class="fa-solid fa-chevron-down"  style={{color: "#000000;"}}></i></p>
            <p>BLOG <i class="fa-solid fa-chevron-down"  style={{color: "#000000;"}}></i></p>
            <p>CONTACT <i class="fa-solid fa-chevron-down"  style={{color: "#000000;"}}></i></p>
          </div>
        </div>
        <div className='home__header__2'>
          <div className='home__header__2__drop'>
            <i class="fa-solid fa-bars"></i>
            <p><b>Browse Categories</b></p>
          </div>
          <div className='home__header__2__search'>
              <input className='inp' type="text" placeholder='Search entire store here' />
              <button className='btn'>Search</button>
          </div>
          <div className='abc'>
            <p><b>Login</b></p>
            <p>or Register</p>
          </div>
          <div className='home__header__2__shop'>
            <i class="fa-solid fa-cart-shopping" style={{color: "#22e208"}}></i>
            <div>
               <p>Shopping Card</p>
               <p><i class="fa-solid fa-euro-sign" style={{color: "#4ad80e"}}></i>0.00</p>
            </div>
          </div>
        </div>
      </div>
   

      
    </div>
  )
}

export default HomeHeader
