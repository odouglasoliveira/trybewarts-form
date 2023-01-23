const button = document.getElementById('button-form');
const btnSubmit = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
const textarea = document.getElementById('textarea');
const contadora = document.getElementById('counter');

let fullname; let email; let house; let family; let message; let skill; let
  avaliation;

function checkForm() {
  email = document.getElementById('email');
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
    btnSubmit.style.backgroundColor = 'rgb(67, 44, 131)';
    btnSubmit.style.color = 'white';
  } else {
    btnSubmit.disabled = true;
    btnSubmit.style.backgroundColor = '';
    btnSubmit.style.color = '';
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
  if (!firstname) throw new Error('Insira seu nome');
  const lastname = document.getElementById('input-lastname').value;
  if (!lastname) throw new Error('Insira seu sobrenome');
  fullname = `Nome: ${firstname} ${lastname}`;
  return fullname;
}

function collectEmail() {
  email = `Email: ${document.getElementById('input-email').value}`;
  if (!document.getElementById('input-email').value) throw new Error('Insira seu email');
  return email;
}

function collectHouse() {
  house = `Casa: ${document.getElementById('house').value}`;
  if (!document.getElementById('house').value) throw new Error('Escolha uma casa');
  return house;
}

function collectFamily() {
  family = `Família: ${document.getElementById('evaluation-form').family.value}`;
  return family;
}

function collectMessage() {
  message = `Observações: ${document.getElementById('textarea').value}`;
  return message;
}

function collectSkills() {
  const checkboxes = document.querySelectorAll('.subject');
  const skills = [];
  for (let i = 0; i < checkboxes.length; i += 1) {
    if (checkboxes[i].checked) {
      skills.push(checkboxes[i].value);
    }
  }
  skill = `Matérias: ${skills.join(', ')}`;
  return skill;
}

function collectAvaliation() {
  avaliation = `Avaliação: ${document.querySelector('input[name=\'rate\']:checked').value}`;
  return avaliation;
}

function showUserData() {
  const page = document.getElementById('main-content');
  const form = document.getElementById('evaluation-form');
  form.style.display = 'none';
  formData.appendChild(createParagraph(fullname));
  formData.appendChild(createParagraph(email));
  formData.appendChild(createParagraph(house));
  formData.appendChild(createParagraph(family));
  formData.appendChild(createParagraph(skill));
  formData.appendChild(createParagraph(avaliation));
  formData.appendChild(createParagraph(message));
  page.insertBefore(formData, document.getElementById('trybewarts-forms-logo'));
}

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  try {
    collectFullname();
    collectEmail();
    collectHouse();
    collectFamily();
    collectSkills();
    collectAvaliation();
    collectMessage();
    showUserData();
  } catch (error) {
    window.alert(error.message);
  }
});
