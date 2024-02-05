/**
 * ex_index props: collect the index number of a element that it color need to be updated
 * 
 *  arrClass props: collect the classname of attribute name (all the element involve should have the same the classname) 
 * 
 * Addcolor(ex_index, arrClass) a function that update the  color of element(s)
 * 
*/
const Useaddcolor = (ex_index, arrClass) => {
    const arr_el = document.querySelectorAll('.'+arrClass)
    
    if(arrClass) arr_el.forEach((el, index) =>{
        el.style.color = 'var(--primary-color)'

        if(ex_index === index){
            el.style.color = 'var(--secondary-color)'
        } 
    })

}

export default Useaddcolor
