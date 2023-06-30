
// Toggle mobile navigation
$('.menu-toggle').click(function() {
  $(".nav").toggleClass("mobile-nav");
  $(this).toggleClass("is-active");
});

// Get form elements
const nameEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const subjectEl = document.querySelector("#subject");
const messageEl = document.querySelector("#message");
const form = document.querySelector("#contact-form");
// Validate form fields
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
        document.querySelector(".email-error").innerText = "";
      }
    }

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Perform form validation
  checkValidations();

  // If all fields are valid, submit the form
  if (!document.querySelector('.name-error').classList.contains('error') &&
      !document.querySelector('.email-error').classList.contains('error')) {
    handleSubmit(event);
  }
});
   


function reset() {
  nameEl.value = "";
  emailEl.value = "";
  subjectEl.value = "";
  messageEl.value = "";
  document.querySelector(".name-error").innerText = "";
  document.querySelector(".email-error").innerText = "";
}



// Handle form submission
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
// Show message in result div
    function showMessage(message, type) {
      var resultDiv = document.getElementById('result');
      var messageElement = document.createElement('div');
      messageElement.textContent = message;
      messageElement.className = type;
      resultDiv.appendChild(messageElement);
    }
  // Validate email address using regular expression  
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }