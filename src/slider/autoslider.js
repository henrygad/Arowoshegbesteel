import './autoslider.css'



    
/** start get currect position function **/
     let currect = -1
   export const currectposition = (stop) => {
          currect++
          let move = 0

        if(currect === stop){
            currect = 0
        }

        if(currect === 0){
            move = 0
        }
        if(currect === 1){
            move = 1
        }
        if(currect === 2){
            move = 2
        }
        if(currect === 3){
            move = 3
        }
        if(currect === 4){
            move = 4
        }
        if(currect === 5){
            move = 5
        }
        
    
          return move;
    }


/** end get currect position function **/


/* start slide fuction*/
  export  const changeposition = (el, index) => {
         let math;    
        
         if(index === 0){
            /* move to first slide */
            math = index * 100
            el.style.left = '-' + math + '%'

         } else if (index === 1){
            /* move to second slide */
            math = index * 100
            el.style.left = '-' + math + '%'

        } else if (index == 2){
            /* move to third slide */
            math = index * 100
            el.style.left = '-' + math + '%'

        } else if(index === 3){
            /* move to fourth slide */
            math = index * 100
            el.style.left = '-' + math + '%'

        } else if (index  === 4){
            /* move to five slide */
            math = index * 100
            el.style.left = '-' + math + '%'

        } else if(index === 5){
            /* move to six slide */
            math = index * 100
            el.style.left = '-' + math + '%'
        }

    }

/* end slide fuction*/


/** start slider dots nav functions **/

    export const sliderdotsnav = ((el, index )=> {
         changeposition( el, index)
         console.log(el, index)
   })

/** end slider dots nav functions **/

