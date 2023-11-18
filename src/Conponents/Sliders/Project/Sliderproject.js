import './Sliderproject.css'

const Sliderproject = ({img1, img2, img3, img4, img5, img6}) => {
  return (
    <div className='slider'>
        <div className='slides'>
            <img src={img1} alt='' />
            <img src={img2} alt='' />
            <img src={img3} alt='' />
            <img src={img4} alt='' />
            <img src={img5} alt='' />
            <img src={img6} alt='' />
        </div>
    </div>
  )
}

export default Sliderproject
