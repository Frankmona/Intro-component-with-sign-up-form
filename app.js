// use Foreach on the inputs

const form = document.getElementById("form");
const FirstName = document.getElementById("FirstName");
const LastName = document.getElementById("LastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

// // Email validation
// function isValid(email){
//     const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//     return re.test(email)
// }

// // function that shows the error
// function showError(input, message){
//     const formControl = input.parentElement;
//     formControl.className = 'form-control error'
//     const p = formControl.querySelector('p')
//     p.innerText = message
// }
// // Event listener listening for the submit event
// form.addEventListener('submit', function(e){
//     e.preventDefault()

//     if(FirstName.value === ''){
//         showError(FirstName, 'firstname cannot be empty')
//     }

//     if(email.value === ''){
//         showError(email, 'email cannot be empty')
//     }
//    else if (!isValid(email.value)){
//     showError(email, 'invalid email')
//    }

//     if(LastName.value === ''){
//         showError(LastName, 'lastname cannot be empty')
//     }

//     if(password.value === ''){
//         showError(password, 'password cannot be empty')
//     }

// })

// Method 2
// we can also use the below method as it more scalable

// function that shows the error
function showError(input, message) {
  const formControl = input.parentElement;
  // here we added the class error to the form control to make it visbile as we configured in css
  formControl.className = "form-control error";
  const p = formControl.querySelector("p");
  p.innerText = message;
}

//  function to check  required inputs
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} cannot be empty`);
    }
  });
}

// function to get field name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener("submit", function (e) {
  //   e.preventDefault();
  checkRequired([FirstName, LastName, email, password]);
});
