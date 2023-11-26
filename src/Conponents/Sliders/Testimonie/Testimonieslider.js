import './Testimonieslider.css'

const Testimonieslider = ( {img1, img2, img3, img4, nav1, nav2}) => {
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
                <h3>Nurex Aluminum</h3>
              </div>
              <div className='second_div'>
                <p>
                  "Thanks for the good job Arowoshegbe construction 🦺 I really appreciate how you do your job is very, very neat and definite, you have a good finish up….keep it up…I still need you to come for more job for us." 
                </p>
              </div>
            </div>
            <div className='slide two'>
              <div className='first_div'>
                  <img  src={img2} alt=''/>
                  <h3>5 Stor Technical Services</h3>
                </div>
                <div className='second_div'>
                  <p>
                    "I would like to formally and sincerely express my gratitude for the amazing work you accomplished for us @Arowoshegbesteelconstruction   You are highly worthy and trusted."
                  </p>
              </div>
            </div>
            <div className='slide three'>
              <div className='first_div'>
                  <img  src={img3} alt=''/>
                  <h3>For Technical Services</h3>
                </div>
                <div className='second_div'>
                  <p>
                    "Fantastic work, there delivered the best quality, partner with them on a project, they did not disappoint Us 👍." 
                  </p>
              </div>
            </div>
            <div className='slide four'>
              <div className='first_div'>
                  <img  src={img4} alt=''/>
                  <h3>Adetech Aluminum</h3>
                </div>
                <div className='second_div'>
                  <p>
                  "Working with experts always make a difference in our industry and @aworosegbe steel construction are definitely one of the best."
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
