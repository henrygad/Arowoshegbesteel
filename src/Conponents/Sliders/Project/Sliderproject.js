import './Sliderproject.css'

const Sliderproject = ({move, img1, img2, img3, img4, img5, img6}) => {

 const  Mytest = () => {
    if(move === 'right'){
       return( <div className='slider'>
          <div className='slides right' >
            <img src={img1} alt='' />
            <img src={img2} alt='' />
            <img src={img3} alt='' />
            <img src={img4} alt='' />
            <img src={img5} alt='' />


            <img src={img1} alt='' />
            <img src={img2} alt='' />
            <img src={img3} alt='' />
            <img src={img4} alt='' />
            <img src={img5} alt='' />
          

            <img src={img1} alt='' />
            <img src={img2} alt='' />
            <img src={img3} alt='' />
            <img src={img4} alt='' />
            <img src={img5} alt='' />
           
        </div>
      </div>)

    } else if(move === 'left'){
      return (<div className='slider'>
        <div className='slider'>
          <div className='slides left' >
            <img src={img1} alt='' />
            <img src={img2} alt='' />
            <img src={img3} alt='' />
            <img src={img4} alt='' />
            <img src={img5} alt='' />
           
            <img src={img1} alt='' />
            <img src={img2} alt='' />
            <img src={img3} alt='' />
            <img src={img4} alt='' />
            <img src={img5} alt='' />
            

            <img src={img1} alt='' />
            <img src={img2} alt='' />
            <img src={img3} alt='' />
            <img src={img4} alt='' />
            <img src={img5} alt='' />
            
        </div>
      </div>

        
      </div>)
    }
 }
  
  return (
    Mytest()
  )
}

export default Sliderproject
