import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <div className='slider1'>

                    <SwiperSlide className='swiperInside'><img  src="https://htmldemo.net/pustok/pustok/image/bg-images/home-slider-2-ai.png" alt="" />
                        <div className='text' >

                          <h2>J.D.V KURTNESS DE VANDERS</h2>
                          <p>Lorem ipsum dolor sit amet . Sunt, expedita!</p>
                          <button style={{border:"1px solid green", height:"40px", backgroundcolor:"white", color:"green"}}>7.99 $-Order Now</button>
                        </div>

                    </SwiperSlide>

                </div>
                <div>
                    <SwiperSlide  className='slider2'><img className='swipimg' src="https://htmldemo.net/pustok/pustok/image/bg-images/home-slider-1-ai.png" alt="" />
                    <div className='text2'>
                    <h2>J.D.V KURTNESS DE VANDERS</h2>
                          <p>Lorem ipsum dolor sit amet . Sunt, expedita!</p>
                          <button style={{border:"1px solid green", height:"40px", backgroundcolor:"white", color:"green"}}>7.99 $-Order Now</button>
                    </div>
                    
                    
                    
                    </SwiperSlide>
                </div>

            </Swiper>
        </>
    );
}