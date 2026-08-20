const form = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;
  
  console.log(name);
  console.log(email);
  console.log(message);

   if (name === "" || email === "" || message === "") {

    formMessage.textContent = "Please fill in all fields."
    return;
  }

  formMessage.textContent = "Message Ready to Send!";
 
  
});