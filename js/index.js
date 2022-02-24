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

const button = document.querySelector('.form-area button');

button.addEventListener('click', () => {
  if (pass1.value !== pass2.value) {
    pass1.setCustomValidity("The two passwords don't match!");
    pass1.reportValidity();
  } else {
    pass1.setCustomValidity('');
  }
});

function setTheme() {
  const root = document.documentElement;
  const bg = document.querySelector('.description-area');
  let themeBtn = document.querySelector('.theme-toggle');

  const newTheme = root.className === 'light' ? 'dark' : 'light';
  root.className = newTheme;
  if (root.className === 'dark') {
    bg.setAttribute(
      'style',
      'background-image: url(https://raw.githubusercontent.com/gzveriachvili/sign-up-form/main/assets/img/background_dark.png)'
    );
    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    bg.setAttribute(
      'style',
      'background-image: url(https://raw.githubusercontent.com/gzveriachvili/sign-up-form/main/assets/img/background.png)'
    );
    themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

setTheme();
document.querySelector('.theme-toggle').addEventListener('click', setTheme);
