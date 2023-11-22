import './Testimonieslider.css'

const Testimonieslider = ( {img1, img2, nav1, nav2}) => {
  return (
    <>
    <div className='slider'>
        <div className='slides_wrap'>
          <div className='slides'>
            <div className='slide one'>
              <div className='first_div'>
                <img  src={img1} alt=''/>
                <h3>John Mark</h3>
              </div>
              <div className='second_div'>
                <p>
                  "I recently had my kitchen extractor system designed and installed by Arowoshege, and I am extremely impressed with the results. The team was professional and efficient, taking care to understand my needs and preferences before proposing a solution. 
                </p>
              </div>
            </div>
            <div className='slide two'>
              <div className='first_div'>
                  <img  src={img2} alt=''/>
                  <h3>Henry markwell</h3>
                </div>
                <div className='second_div'>
                  <p>
                    Arowoshege did a perfect ventilation system, but also installed it efficiently and professionally. My factory now has clean and fresh air all thanks to their excellent work. I am beyond satisfied with their service."
                  </p>
              </div>
            </div>
            <div className='slide three'>
              <div className='first_div'>
                  <img  src={img1} alt=''/>
                  <h3>piliph brown</h3>
                </div>
                <div className='second_div'>
                  <p>
                    "As a factory manager, I have struggled with finding the right ventilation system that not only worked effectively but also fit our budget. That was until I came across arowoshebge. 
                  </p>
              </div>
            </div>
            <div className='slide four'>
              <div className='first_div'>
                  <img  src={img2} alt=''/>
                  <h3>Rosel Mose</h3>
                </div>
                <div className='second_div'>
                  <p>
                  "I recently had a factory ventilation system designed and constructed by arowoshebge, and I must say, the results have exceeded my expectations.
                  </p>
                </div>
            </div>
          </div>
        </div>
       <div className='navs '>
        <div className='left'><img src={nav2} alt=''/></div>
        <div className='right'><img src={nav1} alt='' /></div>
       </div>
      </div>
      
    </>
  )
}

export default Testimonieslider
