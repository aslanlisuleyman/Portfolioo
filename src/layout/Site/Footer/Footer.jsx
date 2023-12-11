import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div>  
        <p className='footer__p1'>Suspendisse in auctor augue. Cras fermentum est ac fermentum tempor. Etiam vel magna volutpat, posuere eros</p>
      </div>
      <div className='footer__i'>
        <i class="fa-brands fa-cc-paypal icon" style={{color: "#ffffff"}}></i>
        <i class="fa-brands fa-cc-discover icon" style={{color: "#ffffff"}}></i>
        <i class="fa-brands fa-cc-visa icon" style={{color: "#ffffff"}}></i>
        <i class="fa-brands fa-cc-stripe icon" style={{color: "#ffffff"}}></i>
      </div>
      <div>  <p className='footer__p2'>Copyright © 2022 <span>Pustok</span>. All Right Reserved.</p>  </div>
      <div> <p className='footer__p2'>Design By Pustok</p> </div>    
    </div>
  )
}

export default Footer