const button = document.getElementById('button-form');
const btnSubmit = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');

function checkForm() {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', checkForm);

function activeBtn() {
  if (checkbox.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}

checkbox.addEventListener('click', activeBtn)

window.onload = () => {
  btnSubmit.disabled = true;
}
