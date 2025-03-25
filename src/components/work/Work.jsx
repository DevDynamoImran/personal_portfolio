import React from 'react'
import './Work.css'
import amazon from '../../assets/img/amazon.png'
import upwork from '../../assets/img/Upwork.png'
import shopify from '../../assets/img/Shopify.png'
import fiverr from '../../assets/img/fiverr.png'
import facebook from '../../assets/img/Facebook.png'
import {motion} from 'framer-motion'

const Work = () => {
  const transition = {duration:2,type:'spring'}
  return (
    <div className='work'>
        <div className="services-text">
            <div className="services-heading">Work for All these <br /><span>Brands & Clients</span></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolores veniam quidem voluptate dicta quisquam molestiae similique ab id! Rerum.</p>
            <button className='btn cv-btn'>Downlaod CV</button>
        </div>
        
        <div className="brands">
            <div className="main-circle">
             <div className="b-circle">
              <img className='b-img' src={amazon} alt="" />
              <motion.img 
               initial={{top:'36%', left:'36%'}}
               whileInView={{top:'250px', left:'100px'}}
               transition={transition}
              className='b-img' src={fiverr} alt="" />
              <motion.img
              initial={{top:'36%', left:'36%'}}
              whileInView={{top:'-30px', left:'100px'}}
              transition={transition}
              className='b-img' src={facebook} alt="" />
              <motion.img
              initial={{top:'36%', left:'36%'}}
              whileInView={{left:'250px', top:'100px'}}
              transition={transition}
              className='b-img' src={upwork} alt="" />
              <motion.img
              initial={{top:'36%', left:'36%'}}
              whileInView={{top:'100px', left:'-30px'}}
              transition={transition}
              className='b-img' src={shopify} alt="" />
             </div>
             <div className="blue"></div>
             <div className="yellow"></div>
            </div>
        </div>
        <div className="blueeee"></div>
        <div className="greeeen"></div>
    </div>
  )
}

export default Work