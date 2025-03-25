import React, { useState } from 'react'
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => { 

    const [done,setDone] = useState(false);
    
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_lcpu0qj', 'template_y4wsvys', form.current, 'xmOF3hK8xYZFX-F8V')
        .then((result) => {
            console.log(result.text); 
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };



  return (
    <div className='contact'>
         <div className="contact-left">
            <div className="cont-heading">Get in touch <br /><span>Contact me</span></div>
         </div>
         <div className="contact-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user-name' placeholder='Enter your Name' />
                <input type="email" name='user-email' placeholder='Enter your Email' />
                <textarea name="message" id="" placeholder='Message...'></textarea>
                <button type='submit' className='btn form-btn'>Send</button>
            </form>
             <span>{done && 'Thanks for Contacting me '}</span>
            
         </div>
         <div className="pinnnk"></div>
         <div className="cyaaaan"></div>
    </div>
  )
}

export default Contact