const email = document.querySelector('#user_email');

email.addEventListener('input', function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('That is not a valid email address!');
  } else {
    email.setCustomValidity('');
  }
});

const pass1 = document.querySelector('#user_password');
const pass2 = document.querySelector('#user_password_confirm');

const button = document.querySelector('button');

button.addEventListener('click', () => {
  if (pass1.value !== pass2.value) {
    pass1.setCustomValidity("The two passwords don't match!");
    pass1.reportValidity();
  } else {
    pass1.setCustomValidity('');
  }
});
