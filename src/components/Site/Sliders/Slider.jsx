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

                          <h2>H.G. Wells <br />
                          De Vengeance</h2>
                          <p> <i>Cover Up Front Of Books And Leave <br /> Summary</i></p>
                          <button >7.99 $-Order Now</button>
                        </div>

                    </SwiperSlide>

                </div>
                <div>
                    <SwiperSlide  className='slider2'><img className='swipimg' src="https://htmldemo.net/pustok/pustok/image/bg-images/home-slider-1-ai.png" alt="" />
                    <div className='text2'>
                    <h2>J.D. Kurtness <br />
                    De Vengeance</h2>
                          <p> <i>Cover Up Front Of Books and Leave Summary</i></p>
                          <button >7.99 $-Order Now</button>
                    </div>
                    
                    
                    
                    </SwiperSlide>
                </div>

            </Swiper>
        </>
    );
}