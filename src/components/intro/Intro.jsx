import React from 'react'
import './Intro.css';
import LinkedIn from '../../assets/img/LinkedIn.png'
import Insta from '../../assets/img/instagram.png'
import Github from '../../assets/img/github.png'
import Vector1 from '../../assets/img/Vector1.png'
import Vector2 from '../../assets/img/Vector2.png'
import Boy from '../../assets/img/boy.png'
import Hmd from '../../assets/img/hmd.png'
import Crown from '../../assets/img/crown.png'
import Thumb from '../../assets/img/thumbup.png'
import Glasses from '../../assets/img/glassesimoji.png'
import {motion} from 'framer-motion'


const Intro = () => {
  const transition = {duration:2,type:'spring'}
  return (
    <div className='intro'>
        <div className="intro-left">
            <div className="intro-heading">Hy! I am <br /><span>Hammad Muneer</span></div>
            <p>Frontend Developer with level of experience in web designing and development producing the Quality work</p>
            <button className='btn'>Hire me</button>
            <button style={{marginLeft:'20px'}} className='btn'>Download Cv</button>
            <div className="social-icon">
                <img src={Insta} alt="instagram" />
                <img src={LinkedIn} alt="LinkedIn" />
                <img src={Github} alt="GitHub" />
        </div>
            </div>
        <div className="intro-right">
            <div className="intro-main-img">
             <img src={Vector1} alt="vector1" />
             <img src={Vector2} alt="vector2" />
             <img src={Hmd} alt="profile pic" />
             </div>
             <motion.div
             initial={{top:'-80px',right:'-80px'}}
             whileInView={{top:'-20px',right:'-20px'}}
             transition={transition}
              className="intro-cards">
                <img className='card-img' src={Crown} alt="" />
                <div className="text">Web <br /> developer</div>
             </motion.div>
             <motion.div
             initial={{left:'-75px',top:'385px'}}
             whileInView={{left:'-15px',top:'325px'}}
             transition={transition}
             className="intro-cards card2">
                <img className='card-img' src={Thumb} alt="" />
                <div className="text">Best Design <br /> Award</div>
             </motion.div>
             <motion.img
             initial={{left:'-180px'}}
             whileInView={{left:'-120px'}}
             transition={transition}
             src={Glasses} alt="" className="imoji" />
             <div className="purple"></div>
        </div>
             <div className="cyan-1"></div>
             <div className="ccc"></div>
    </div>
  )
}

export default Intro