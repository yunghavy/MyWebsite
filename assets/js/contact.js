
$('.menu-toggle').click(function(){
   $(".nav").toggleClass("mobile-nav");
   $(this).toggleClass("is-active");
});

// end of navbar

const nameEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const subjectEl = document.querySelector("#subject");
const messageEl = document.querySelector("#message");

const form = document.querySelector("#contact-form");

function checkValidations() {
  let letters = /^[a-zA-Z\s]*$/;
  const nameValue = nameEl.value.trim();
  const emailValue = emailEl.value.trim();
  const subjectValue = subjectEl.value.trim();
  const messageValue = messageEl.value.trim();
  if (nameValue === "") {
     document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please fill out this field!";
  } else {
    if (!letters.test(nameValue)) {
      document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please enter only characters!";
    } else {
      document.querySelector(".name-error").innerText = "";
    }
  }
  if (emailValue === "") {
     document.querySelector(".email-error").classList.add("error");
      document.querySelector(".email-error").innerText =
        "Please fill out this field!";
      } else {
        // Add email validation logic if needed
        document.querySelector(".email-error").innerText = "";
      }
    }


function reset() {
  nameEl.value = "";
  emailEl.value = "";
  subjectEl.value = "";
  messageEl.value = "";
  document.querySelector(".name-error").innerText = "";
  document.querySelector(".email-error").innerText = "";
}
 // end of form styles

 // validation of contact form

  /* Form submissions */
  document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('contact-form').addEventListener('submit', handleSubmit);
    });

    function handleSubmit(event) {
      event.preventDefault(); // Prevent form submission

      var form = event.target;
      var resultDiv = document.getElementById('result');
      resultDiv.textContent = ''; // Clear previous result

      // Perform form submission asynchronously
      var xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action, true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            // Show success message
            showMessage('Form submitted successfully!', 'success');
            form.reset();
          } else {
            // Show error message
            showMessage('Form submission failed. Please try again.', 'error');
          }
        }
      };
      xhr.send(new FormData(form));
    }

    function showMessage(message, type) {
      var resultDiv = document.getElementById('result');
      var messageElement = document.createElement('div');
      messageElement.textContent = message;
      messageElement.className = type;
      resultDiv.appendChild(messageElement);
    }
