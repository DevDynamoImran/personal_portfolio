import React from 'react'
import './Testimonials.css'
import 'swiper/css'
import 'swiper/css/pagination';
import profile1 from '../../assets/img/profile1.jpg'
import profile2 from '../../assets/img/profile2.jpg'
import profile3 from '../../assets/img/profile3.jpg'
import profile4 from '../../assets/img/profile4.jpg'
import profile5 from '../../assets/img/profile5.jpg'
import profile6 from '../../assets/img/profile6.jpg'
import {Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'


const Testimonials = () => {
  
    const clients = [
        {
            img: profile1,
            review: "lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit"
        },
        {
            img: profile2,
            review: "lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit"
        },
        {
            img: profile3,
            review: "lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit"
        },
        {
            img: profile4,
            review: "lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit"
        },
        {
            img: profile5,
            review: "lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit"
        },
        {
            img: profile6,
            review: "lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit lorem ipsum sit amit"
        },
    ]


  return (
    <div className='testimonials'>
        <span>Clients always get</span>
        <span> Exceptinal work </span>
        <span>From me...</span>
      <div className="cyan"></div>
      <div className="pinkkkk"></div>
       <Swiper
         modules={[Pagination]}
         slidesPerView={1}
         pagination={{clickable:true}}
       >
        {
            clients.map((client,index)=>{
                return(
                <SwiperSlide id={index}>
                    <div className="test-card">
                    <img src={client.img} alt="" />
                    <p>{client.review}</p>
                    </div>
                </SwiperSlide>
                )
            })
        }

       </Swiper>


    </div>
  )
}

export default Testimonials