import './Testimonieslider.css'

const Testimonieslider = ( {img1, img2, nav1, nav2}) => {
  let currentposition = 200
  let  newposition = 0
  let previousposition = 0
  let count = 0

  function calc(value) {
    count += 50

    if(count === currentposition) {
       count = 0 }
        
       if(currentposition === 200){
         newposition = currentposition - count
         previousposition = newposition
         //cp 150
      } else if (currentposition === 150){
         newposition = currentposition - count
         previousposition = newposition
         //cp 100
      } else if (currentposition === 100){
        newposition = currentposition - count
        previousposition = newposition
        //cp is 50
      }

       if(value === "left"){
          if (newposition === 150 ){
            return 50
          } else if (newposition === 100){
            return 100
          } else if (newposition === 50){
            return 150
          }
       }

      if(value === 'right'){
          if (previousposition === 150 ){
            return 100
        } else if (previousposition === 100){
          return 50
        } else if (previousposition === 50){
          return 0
        }
      }

      

  }



  const testimoniesslidernavleft = (e) => {
    const projectslider_el = document.querySelector('.project_slider')
     const result = calc('left')

     projectslider_el.style.left = '-'+ result + '%'     
  }
  const testimoniesslidernavright = (e) => {
     const projectslider_el = document.querySelector('.project_slider')
     const result = calc('right')
      projectslider_el.style.left = '-'+ result + '%'
  }




  return (
    <>
    <div className='slider'>
        <div className='slides_wrap'>
          <div className='slides project_slider'>
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
        <div className='left' ><img src={nav2} alt='' onClick={ e => testimoniesslidernavleft(e)}/></div>
        <div className='right' ><img src={nav1} alt='' onClick={ e => testimoniesslidernavright(e)} /></div>
       </div>
      </div>
      
    </>
  )
}

export default Testimonieslider
