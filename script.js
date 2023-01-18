const button = document.getElementById('button-form');
const btnSubmit = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
const textarea = document.getElementById('textarea');
const contadora = document.getElementById('counter');

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

checkbox.addEventListener('click', activeBtn);

function contagem() {
  const cont = 500 - textarea.value.length;
  contadora.innerHTML = cont;
}

textarea.addEventListener('input', contagem);

window.onload = () => {
  btnSubmit.disabled = true;
  contadora.innerHTML = 500;
};

function createParagraph(content) {
  const paragraph = document.createElement('p');
  paragraph.innerHTML = content;
  return paragraph;
}
const formData = document.createElement('section');
formData.id = 'form-data';

function collectFullname() {
  const firstname = document.getElementById('input-name').value;
  const lastname = document.getElementById('input-lastname').value;
  const fullname = `Nome: ${firstname} ${lastname}`;
  formData.appendChild(createParagraph(fullname));
}

function collectEmail() {
  const email = `Email: ${document.getElementById('input-email').value}`;
  formData.appendChild(createParagraph(email));
}

function collectHouse() {
  const house = `Casa: ${document.getElementById('house').value}`;
  formData.appendChild(createParagraph(house));
}

function collectFamily() {
  const family = `Família: ${document.getElementById('evaluation-form').family.value}`;
  formData.appendChild(createParagraph(family));
}

function collectMessage() {
  const message = `Observações: ${document.getElementById('textarea').value}`;
  formData.appendChild(createParagraph(message));
}

function collectSkills() {
  const checkboxes = document.querySelectorAll('.subject');
  const skills = [];
  for (let i = 0; i < checkboxes.length; i += 1) {
    if (checkboxes[i].checked) {
      skills.push(checkboxes[i].value);
    }
  }
  const skill = `Matérias: ${skills.join(', ')}`;
  formData.appendChild(createParagraph(skill));
}

function collectAvaliation() {
  const avaliation = `Avaliação: ${document.querySelector('input[name=\'rate\']:checked').value}`;
  formData.appendChild(createParagraph(avaliation));
}

function showUserData() {
  const page = document.getElementById('main-content');
  const form = document.getElementById('evaluation-form');
  form.style.display = 'none';
  page.insertBefore(formData, document.getElementById('trybewarts-forms-logo'));
}

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  collectFullname();
  collectEmail();
  collectHouse();
  collectFamily();
  collectSkills();
  collectAvaliation();
  collectMessage();
  showUserData();
});
