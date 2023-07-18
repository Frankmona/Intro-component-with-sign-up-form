// use Foreach on the inputs

const form = document.getElementById('form')
const FirstName = document.getElementById('FirstName')
const LastName = document.getElementById('LastName')
const email = document.getElementById('email')
const password = document.getElementById('password')

// function that shows the error
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const p = formControl.querySelector('p')
    p.innerText = message
}
// Event listener listening for the submit event
form.addEventListener('submit', function(e){
    e.preventDefault()

    if(FirstName.value === ''){
        showError(FirstName, 'firstname cannot be empty')
    }

    if(email.value === ''){
        showError(email, 'email cannot be empty')
    }

    if(LastName.value === ''){
        showError(LastName, 'lastname cannot be empty')
    }

    if(password.value === ''){
        showError(password, 'password cannot be empty')
    }


})
