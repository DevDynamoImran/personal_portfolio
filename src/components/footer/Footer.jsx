import React from 'react'
import wave from '../../assets/img/wave.png'
import './Footer.css'
import { UilFacebookF } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons'



const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-content">
            <h1>copyright &copy; by hammad Muneer</h1>
            <div className="icons">
               <UilFacebookF color={'white'} size='3rem'/>
               <UilInstagram color={'white'} size='3rem'/>
               <UilGithub color={'white'} size='3rem'/>
            </div>
        </div>
        <img src={wave} alt="" />
    </div>
  )
}

export default Footer