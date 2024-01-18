import './Titlestroke.css'

const Titlestroke = ({text, color}) => {
  return (
    <div className='title_stroke'>
      <span className='stroke left' style={{
        backgroundColor: color,
       }}></span><h2 style={{
        color: color,
       }} >{text}</h2><span className='stroke right' style={{
        backgroundColor: color,
       }}></span>
    </div>
  )
}

export default Titlestroke;
