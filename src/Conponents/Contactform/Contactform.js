import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import './Contactform.css'


export const Contactform = () => {
  const form = useRef();
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();

       if(name && email && phone){
        emailjs.sendForm('service_dyloeel', 'template_svrchpo', form.current, 'ltNawjgy3CqCTwVXe')
        .then((result) => {
          alert("message send.", result.text)
            //console.log(result.text);
        }, (error) => {
            alert(error.text)
            //console.log(error.text);
        });
       }else{
        alert('boxes empty')
        return;
       }


      setName('')
      setEmail('')
      setPhone('')
      setService('')
      setMessage('')
  };

  return (
    <div className='contact_us'>
      <form ref={form} onSubmit={sendEmail} id='contactform'  >
        <div className='grid_wrap'>
          <div className='name'>
            <label htmlFor='name'>name</label>
            <input type='text' id='name' placeholder='John mark' name="from_name"  value={name} onInput={ e =>  setName(e.target.value)} />
          </div>
          <div className='email' >
            <label htmlFor='email'>email</label>
            <input type='email' id='email' placeholder='johnmark@gmail.com' name="from_email" value={email}  onInput={ e => setEmail(e.target.value)}/>
          </div>
          <div className='phone'>
            <label htmlFor='phone'>phone</label>
            <input type='phone' id='phone' placeholder='+234 7025672168' name="from_phone" value={phone}  onInput={ e => setPhone(e.target.value)} />
          </div>
          <div className='service'>
            <label htmlFor='service'>service</label>
            <input type='text' id='service' placeholder='Domistic ventilation installation'name="from_service"value={service}  onInput={ e => setService(e.target.value)} />
          </div>
          <div className='message'>
            <label htmlFor='message'>message us</label>
            <textarea type='text' id='message' placeholder='How can we help you?' name="message" value={message}  onInput={ e => setMessage(e.target.value)} />
          </div>
        </div>
        <div className='form_btn'>
          <input className='contact_button' type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};



export default Contactform
