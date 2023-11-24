import React from './Sliderservices.css'


function sliderservices({img1, img2, img3, navright, navleft}) {

  let currentposition = 300
  let  newposition = 0
  let previousposition = 0
  let count = 0

  function calc(value) {
    count += 100

    if(count > 300) {
       count = 0 
      return}
        
       if(currentposition === 300){
         newposition = currentposition - count
         previousposition = newposition
         //cp 200
      } else if (currentposition === 200){
         newposition = currentposition - count
         previousposition = newposition
         //cp 100
      } else if (currentposition === 100){
        newposition = 0
        previousposition = newposition
        //cp is 0
      }

       if(value === "left"){
          if (newposition === 200 ){
            return 100
          } else if (newposition === 100){
            return 200
          } else if (newposition === 0){
            return 0
          }
       }

      if(value === 'right'){
          if (previousposition === 200 ){
            return 100
        } else if (previousposition === 100){
          return 0
        } else if (previousposition === 0){
          return 200 
        }
      }

  }



  const servicesslidernavleft = (e) => {
    const result = calc('left')
    e.target.parentElement.nextElementSibling.style.left = '-'+ result + '%'
    
  }
  const servicesslidernavright = (e) => {
    const result = calc('right')
    e.target.parentElement.previousElementSibling.style.left = '-'+ result + '%' 
  }




  return (
    <div className='slider'>
        <div className='slider_nav left' ><img src={navleft} alt=''onClick={ e => servicesslidernavleft(e)} /></div>
         <div className='slides  services_slider'>
          <img src={img1} alt='' />
          <img src={img2}  alt=''/>
          <img src={img3} alt=''/>
        </div>
        <div className='slider_nav right'><img src={navright} alt='' onClick={ e => servicesslidernavright(e)} /></div>
    </div>
  )
}

export default sliderservices
