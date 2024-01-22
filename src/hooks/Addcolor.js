



const Addcolor = (ex_index, arrClass) => {
    const arr_el = document.querySelectorAll('.'+arrClass)
    
    if(arrClass) arr_el.forEach((el, index) =>{
        el.style.color = 'var(--primary-color)'

        if(ex_index === index){
            el.style.color = 'var(--secondary-color)'
        } 
    })

}

export default Addcolor
