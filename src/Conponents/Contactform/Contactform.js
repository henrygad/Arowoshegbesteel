import React, {useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {Email, Phoneno} from '../../hooks/Formvalidation'

import './Contactform.css'


export const Contactform = ({productsList}) => {
  const form = useRef(null);
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')



  const Clientsidevalidateemail = e=> {
      Email('js-email', 'rgba(0, 0, 255, 0.4)')
  }

  const Clientsidevalidatephone = e=> {
    Phoneno('js-phone', 'rgba(0, 0, 255, 0.4)' )
  }
  

  const Sendemail = (e) => {
    e.preventDefault();
    const clientsidevalidateemail = Email('js-email', 'rgba(0, 0, 255, 0.4)')

    if(!clientsidevalidateemail){
      alert('wrong email, try agin')
      return;
    }else
  
  
      emailjs.sendForm('service_dyloeel', 'template_svrchpo', form.current, 'ltNawjgy3CqCTwVXe')
      .then((result) => {
        alert("message send.", result.text)
      }, (error) => {
          alert(error.text)
      });
    


      setName('')
      setEmail('')
      setPhone('')
      setService('')
      setMessage('')
  };


  return (
      <form ref={form} onSubmit={Sendemail} id='contactform'>
        <div className='contactform_wraper'>
          <div className='name'>
            <label htmlFor='name'>name</label>
            <input type='text' id='name' placeholder='John mark' name="from_name"  value={name} onInput={ e =>  setName(e.target.value)} />
          </div>
          <div className='email' >
            <label htmlFor='email'>email</label>
            <input type='email' id='js-email' placeholder='johnmark@gmail.com' name="from_email" value={email}  onChange={ e => {Clientsidevalidateemail(); setEmail(e.target.value)}}/>
          </div>
          <div className='phone'>
            <label htmlFor='phone'>phone (optional)</label>
            <input type='phone' id='js-phone' placeholder='+234 7025672168' name="from_phone" value={phone}  onInput={ e => { Clientsidevalidatephone(); setPhone(e.target.value)}} />
          </div>
          <div className='service'>
            <label htmlFor='service'>service</label>
            <select id='js-service' name="from_service" value={service} onInput={ e => setService(e.target.value)} >
              {productsList.map((value, index) => (
                 <option id={'vlaue'+index} key={index} value={value.producttitle}>{value.producttitle}</option>  
              ))}
            </select>
          </div>
          <div className='message'>
            <label htmlFor='message'>message</label>
            <textarea type='text' id='message' placeholder='How can we help you?' name="message" value={message}  onInput={ e => setMessage(e.target.value)} />
          </div>
          <div className='button'>
            <input className='contact_button' type="submit" value="Send" />
          </div>
        </div>
      </form>
  );
};


export const Getproductindex =  ex_value =>{
  const contactform_selectel = document.getElementById('js-service')
  contactform_selectel.value =  ex_value
}
