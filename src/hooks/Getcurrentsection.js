/** 
 * id props: collect an elemen id attribute name
 * 
 * Getcurrentsection(id) a function that tell whether a perticular section is showing in the view piont 
*/
const Getcurrentsection = (id) => {
    const el_id = document.getElementById(id)
    const rect = el_id.getBoundingClientRect()
    
    return(
      rect.top <= 100 &&
      rect.bottom >= 100 &&
      rect.left >= 0 &&
      rect.right >= 0
    )
}

export default Getcurrentsection
