import './Titlestroke.css'

const Titlestroke = ({text, color}) => {
  return (
    <div className='title_stroke'>
      <span className='stroke left'></span><h2 style={{
        color: color,
       /*  fontSize: "2.5rem", */
        fontWeight: "600",
        textTransform: "uppercase"
       }} >{text}</h2><span className='stroke right'></span>
    </div>
  )
}

export default Titlestroke
