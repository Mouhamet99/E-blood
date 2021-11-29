let submitButton = document.querySelector('#sign-in')
let email = document.querySelector('input#email')
let password = document.querySelector('input#password')
const user = { email: "", password: "" }

function Handlingconnexion(e) {
   if (email.value == "" || password.value == "") {
      email.style.borderColor = "initial"
      password.style.borderColor = "initial"
      if (email.value === "") {
         email.style.borderColor = "red"
      }
      if (password.value == "") {
         password.style.borderColor = "red"
      }
      // e.preventDefault()
   } else {
      const user = JSON.parse(sessionStorage.getItem("user"));
      if (email.value === user.email && password.value === user.password) {
         window.location.href = "Acceuil.html";
      } else {
         let error = document.querySelector('#error') 
         error.classList.toggle('d-none')
      }
      // user.email = email.value
      // user.password = password.value
      // window.localStorage
      // sessionStorage.setItem("user", JSON.stringify(user))


   }
}

submitButton.addEventListener("click", function (e) {
   e.preventDefault()
   Handlingconnexion(e)
})

