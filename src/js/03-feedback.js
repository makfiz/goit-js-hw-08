import throttle  from 'lodash.throttle';
const fbForm = document.forms[0]

window.onload = function () { 
   ls = JSON.parse(localStorage.getItem("feedback-form-state"))
   fbForm.email.value = ls.email
   fbForm.message.value = ls.message
}
 
fbForm.addEventListener("input", throttle(() => {
    let inputDate = {
    email: fbForm.email.value,
    message: fbForm.message.value
    }
    
    localStorage.setItem("feedback-form-state", JSON.stringify(inputDate))   
    
}, 500))

fbForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(JSON.parse(localStorage["feedback-form-state"]))
    localStorage.removeItem("feedback-form-state")
    
})

