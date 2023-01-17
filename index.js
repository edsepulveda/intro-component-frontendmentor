const form = document.querySelector('form')

const firstName = document.getElementById('first')
const lastName = document.getElementById('last')
const email = document.getElementById('email')
const password = document.getElementById('password')

const divControl = document.getElementById('img__err')

console.log(divControl)
form.addEventListener('submit', (e) =>{
  e.preventDefault();
  validation()
})

const validation = () =>{
  
  const firstNameValue = firstName.value.trim()
  const lastNameValue = lastName.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
 
  const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  if(!firstNameValue){
    displayError(firstName, 'First Name cannot be empty')
  }else{
    showSuccess(firstName)
  }

  (!lastNameValue) ? displayError(lastName, 'Last Name cannot be empty') : showSuccess(lastName)

  if(!emailRegEx.test(emailValue)){
    displayError(email, 'Looks like this is not an email')
  }else{
    showSuccess(email)  
  }

  if(!passwordValue){
    displayError(password, 'Password cannot be empty')
  }else{
    showSuccess(password)
  }
  
}

const displayError = (input, msg) =>{
  const formControl = input.parentElement
  const err = formControl.querySelector('p')
  err.innerText = msg
  formControl.className = 'form-control error'

}

const showSuccess = (input, msg) => {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}