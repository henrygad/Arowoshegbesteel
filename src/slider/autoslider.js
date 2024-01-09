import './autoslider.css'

    
/** start get currect position function **/

    export const currectposition = (slides, wid) => {
        let currectposition = slides.style.left
        slides.style.transition = 'all 1s ease'

        if(currectposition === "-"+ wid * 100 +'%'){
            slides.style.transition = 'none'
            currectposition = 0
        }


        if(currectposition === '0%' || currectposition === ''){
            /* in the first slide */
            currectposition = 1

        } else if(currectposition === '-100%') {
            /* in the second slide */
            currectposition = 2

        } else if(currectposition === '-200%'){
            /* in the third slide */
            currectposition = 3 
          
        } else if(currectposition === '-300%'){
            /* in the fourth slide */
            currectposition = 4

        } else if(currectposition === '-400%'){
            /* in the fiveth slide */
            currectposition = 5

        } else if(currectposition === '-500%'){
            /* in the sixth second slide */
            currectposition = 6
        }
        
          return currectposition;
    }
   


/** end get currect position function **/


/* start slide fuction*/
  export  const changeposition = (slides, index, wid, dot, arr) => {
         let math;   

         if(arr !== undefined){
            displayarrownav(arr, index, wid)
          }
          if(dot !== undefined){
            dotsnavbackgroundcolor(dot, index)
          }

        
         if(index === 0){
            /* move to the first slide */
            math = index * 100
            slides.style.left = '-' + math + '%'

         } else if (index === 1){
           /* move to the second slide */
            math = index * 100
            slides.style.left = '-' + math + '%'

        } else if (index === 2){
            /* move to the third slide */
            math = index * 100
            slides.style.left = '-' + math + '%'

        } else if(index === 3){
            /* move to the fourth slide */
            math = index * 100
            slides.style.left = '-' + math + '%'

        } else if (index  === 4){
            /* move to the fiveth slide */
            math = index * 100
            slides.style.left = '-' + math + '%'

        } else if(index === 5){
            /* move to the six slide */
            math = index * 100
            slides.style.left = '-' + math + '%'
        } else if(index === 6){
            /* move to the seventh slide */
            math = index * 100
            slides.style.left = '-' + math + '%'
        }
        

        if(index === wid){
            if(dot !== undefined) dotsnavbackgroundcolor(dot, 0)
         }
    }

/* end slide fuction*/


/**  start display arrow nav **/

const displayarrownav = (arr, index, wid) => {

     arr.forEach((el2, index2) => {
        let currect;
        el2.style.display = 'flex'

        if(index === 0 || index === wid + 1){
            currect  = 0

            if(currect === index2){
                el2.style.display = 'none'  
            }

        } else if(index === wid){
                currect = 1
                if(currect === index2){
                  el2.style.display = 'none' 
                }
        }

    })
}

/**  end display arrow nav **/


/**  start display dot nav backgrond color **/

  const dotsnavbackgroundcolor = (dot, index) => {
        dot.forEach( (el2, index2) => {
            index2 === index? el2.classList.add('js-gray'): el2.classList.remove('js-gray')          

        })  
  }
  /** end display dot nav backgrond color **/
  

  /** start arrow navs slider functions **/

    export const slidernavs = ( (slides, wid, value, dot, arr) => {
        if(value === 'next'){
            const index = currectposition(slides, wid)
            changeposition(slides, wid, index, dot, arr)
        }
        if(value === 'previous'){
            const index = currectposition(slides, wid)
            changeposition(slides, index - 1, wid, dot, arr)
        }

    })

/** end arrow navs slider functions **/



/** start slider dots nav functions **/

export const sliderdotsnav = ((slides, index, wid, dot, arr )=> {
            changeposition( slides, index, wid, dot, arr)
        })

/** end slider dots nav functions **/

