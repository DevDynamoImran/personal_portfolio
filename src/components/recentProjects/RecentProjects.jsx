import React from 'react'
import './RecentProjects.css';
// import Swiper from 'swiper';
import {Swiper, SwiperSlide } from 'swiper/react';
import Hoc from '../../assets/img/hoc.png'
import Sidebar from '../../assets/img/sidebar.png'
import Reactpro from '../../assets/img/react.jpg'
import 'swiper/css'

const RecentProjects = () => {
  return (
    <div className='recent-projects'>
      {/* <div className="recent-heading"> */}
           <span>Recent Projects</span>
            <span>Portfolio</span>
      {/* </div> */}

    <Swiper
     grabCursor={true}
     spaceBetween={30}
     slidesPerView={3}
     className='recent-pro'
    >
        <SwiperSlide>
            <img src={Hoc} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Reactpro} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Reactpro} alt="" />
        </SwiperSlide>
    </Swiper>

    </div>
  )
}

export default RecentProjects