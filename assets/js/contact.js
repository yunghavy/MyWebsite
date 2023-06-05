document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var phoneNumber = document.getElementById('contact_number').value;
    var phoneNumberRegex = /^\+254\d{9}$/;
    var phoneError = document.getElementById('phone-error');

    var email = document.getElementById('email').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailError = document.getElementById('email-error');

    if (!phoneNumberRegex.test(phoneNumber)) {
      phoneError.textContent = 'Invalid phone number';
    } else {
      // Clear the error message if the phone number is valid
      phoneError.textContent = '';

      // Process the validated phone number
      // ... (perform further actions with the phone number)
    }
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Invalid email address. Please enter a valid email.';
      } else {
        // Clear the error message if the email is valid
        emailError.textContent = '';
  
        // Process the validated email address
        // ... (perform further actions with the email address)
      }
    });


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

