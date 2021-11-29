let submitButton = document.querySelector('#sign-in')
let email = document.querySelector('input#email')
let password = document.querySelector('input#password')
let fullName = document.querySelector('input#full-name')
let date = document.querySelector('input#date')
let tel = document.querySelector('input#tel')
let agreement = document.querySelector('input#agreement')
const user = {fullName:"",  email: "", password: "", date:"",tel:"" , agreement:""  };
const users = {users: ""};

function Handlingconnexion(e) {
   if (password.value == ""  || fullName.value == ""  || !agreement.checked ) {
      email.style.borderColor = "initial"
      password.style.borderColor = "initial"
      fullName.style.borderColor = "initial"
      tel.style.borderColor = "initial"
      date.style.borderColor = "initial"
      if (password.value == "") {
         password.style.borderColor = "red"
      }
      if (tel.value == "") {
         tel.style.borderColor = "red"
      }
      if (date.value == "") {
         date.style.borderColor = "red"
      }
      if (fullName.value == "") {
         fullName.style.borderColor = "red"
      }
      if (agreement.checked == "") {
         agreement.style.border = "1px solid red"
      }
      // e.preventDefault()
   } else {
      user.fullName = fullName.value
      user.email = email.value
      user.tel = tel.value
      user.tel = tel.value
      user.password = password.value
      user.agreement = "yes"
      window.localStorage
      sessionStorage.setItem("user", JSON.stringify(user))
      window.location.href = "./index.html";


   }
}

submitButton.addEventListener("click", function (e) {
   e.preventDefault()
   Handlingconnexion(e)
})