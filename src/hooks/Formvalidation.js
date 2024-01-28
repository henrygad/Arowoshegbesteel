/**
 * inputid props: collect the input id attribute name
 * 
 * border color props: collect the input border-color value
 * 
 * Email((inputid, bordercolor) validate the client side email
 * 
 * Phoneno(inputid, bordercolor) validate the client side phone number
 */


const regexPhoneno = /^[\\+]?[ (]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


export const Email = (inputid, bordercolor) => {
    const input_el = document.getElementById(inputid)
    const sendemail = input_el.value.match(regexEmail)
    const message = 'Wrong email address'

    if(input_el.value){

        if(sendemail){
            Errormessage(input_el, false, bordercolor, message)
            return true 
        } else{
             Errormessage(input_el, true, bordercolor, message)
            return false
        }

    }else{
        Errormessage(input_el, false, bordercolor, message)  
    }
}



export const Phoneno = (inputid, bordercolor) => {
    const input_el = document.getElementById(inputid)
    const sendphoneno = input_el.value.match(regexPhoneno)
    const message = 'Wrong phone number'

    if(input_el.value){


        if(sendphoneno){
            Errormessage(input_el, false, bordercolor, message)
            return true 
        } else{
             Errormessage(input_el, true, bordercolor, message)
            return false
        }

    }else{
        
        Errormessage(input_el, false, bordercolor, message)
    }
}



const Errormessage = (input_el, display, bordercolor, message)=> {
    const errormessage = `<p id='js-errormsg-email' style='display: block; font-size: 12px; color: red;'>${message}</p>`
    const errormgn_el = document.getElementById('js-errormsg-email')

    if(display){

        if(errormgn_el){
            return;
         }else{
            input_el.style.borderColor = 'red'
            input_el.insertAdjacentHTML('afterend', errormessage)
         }  

    }else{

        if(errormgn_el){
            input_el.style.borderColor = bordercolor
            errormgn_el.remove()
         }
     }

}

