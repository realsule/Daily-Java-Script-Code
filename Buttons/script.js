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

/* */
// Select all buttons with the class "alert-btn"
// const alertButtons = document.querySelectorAll(".service-btn");

/*/ Add event listener to each button
alertButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert(`Button "${this.textContent}" was clicked!`);
    });
});   
*/



const buttons = document.querySelectorAll(".service-btn")

  buttons.forEach(button => {

    button.addEventListener("click", function(){

      this.textContent = "Paid"
    });
  });

  


//ADD A POPUP MESSAGE TO CONFIRM PAYMENT