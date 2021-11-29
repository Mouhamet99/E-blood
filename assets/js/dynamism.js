window.onload = () => {
   const user = JSON.parse(sessionStorage.getItem("user"));
   let usernames = document.querySelectorAll('.username')
   usernames.forEach(element => {
      element.textContent = user.fullName
   });
}