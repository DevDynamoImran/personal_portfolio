import React, { useContext } from 'react'
import './Toggle.css'

import { UilMoon } from '@iconscout/react-unicons'
import { UilSun } from '@iconscout/react-unicons'
import { themeContext } from '../../Context'



const Toggle = () => {

   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;

   const handleChange = ()=>{
      theme.dispatch({type:'toggle'});
   }

  return (
    <div className='toggle-btn' onClick={handleChange}>
        <UilMoon/>
        <UilSun/>
        <div className="t-btn" 
        style={darkMode?{left:'2px'}:{right:'2px'}}
        ></div>
    </div>
  )
}

export default Toggle