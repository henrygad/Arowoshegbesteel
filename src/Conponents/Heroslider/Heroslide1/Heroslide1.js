import './Heroslide1.css'

const Headerslide1 = ({heroicon1, heroicon2, heroicon3}) => {
  return (
    <div className='slide one'>
      <div className='container_2clm content_wraper'>
        <div className='title'>
           <h1>Welcome to Arowoshegbe Steel Construction </h1>
        </div>
        <div className='content'>
          <div className='container_2clm boxs'>
            <div className='title'>
                <h2>We Construct and install Industrial Equipments</h2>
            </div>
            <div className=' content'>
              <div className='box one'>
                  <img src={heroicon1} alt="" />
                  <h3>General Contractor </h3>
                  <p>Develops a comprehensive civil project plans, including schedules, budgets, and resource allocation.</p>
              </div>
              <div className='box two'>
                  <img src={heroicon2} alt="" />
                  <h3>Project Planning </h3>
                  <p>Coordinates and manages all aspects of the construction process, from start to finish.</p>
              </div>
              <div className=' box three'>
                  <img src={heroicon3} alt="" />
                  <h3>Refurbishment </h3>
                  <p>Addressing structural issues, fixing wear and tear, and rectifying any existing damage or deterioration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='content_wrap'>
        <div className="slide_title">
         
        </div>
        <div className='second_div'>
          <div className="slide_content">
              <div className="title">
                
              </div>
              <div className="contents">
                <div className="box one">
                  <img src={heroicon1} alt="" />
                  <h3>General Contractor </h3>
                  <p>Develops a comprehensive civil project plans, including schedules, budgets, and resource allocation.</p>
                </div>
                <div className="box two">
                  <img src={heroicon2} alt="" />
                  <h3>Project Planning </h3>
                  <p>Coordinates and manages all aspects of the construction process, from start to finish.</p>
                </div>
                <div className="box three">
                  <img src={heroicon3} alt="" />
                  <h3>Refurbishment </h3>
                  <p>Addressing structural issues, fixing wear and tear, and rectifying any existing damage or deterioration.</p>
              </div>
            </div>
          </div> 
        </div>   


      </div>
 */}    
 </div>
  )
}

export default Headerslide1
