import './Contactform.css'

const Contactform = () => {
  return (
    <div className='contact_us'>
      <form method='' action='' id='contactform' >
        <div className='grid_wrap'>
          <div className='name'>
            <label htmlfor='name'>name</label>
            <input type='text' id='name' placeholder='John mark' />
          </div>
          <div className='email' >
            <label htmlfor='email'>email</label>
            <input type='email' id='email' placeholder='johnmark@gmail.com' />
          </div>
          <div className='phone'>
            <label htmlfor='phone'>phone</label>
            <input type='phone' id='phone' placeholder='+234 7025672168' />
          </div>
          <div className='service'>
            <label htmlfor='service'>service</label>
            <input type='text' id='service' placeholder='Domistic ventilation installation' />
          </div>
          <div className='message'>
            <label htmlfor='message'>message us</label>
            <textarea type='text' id='message' placeholder='Tell us how we can help you...' ></textarea>
          </div>
        </div>
        <div className='form_btn'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contactform
