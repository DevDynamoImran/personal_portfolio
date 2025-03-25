import React from 'react'
import './Navbar.css';
import '../../App.css'
import Toggle from '../toggle/Toggle';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left-nav">
            <div className="n-name">Imran</div>
            <span><Toggle/></span>
        </div>
        <div className="right-nav">
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Experience</li>
                <li>Portfolio</li>
                <li>Testimonials</li>
            </ul>
                <div><button className='btn'>Contact</button></div>
        </div>
    </div>
  )
}

export default Navbar