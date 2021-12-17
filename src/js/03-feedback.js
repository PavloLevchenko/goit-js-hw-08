import throttle from 'lodash/throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

function fillForm(fields) {
  Array.prototype.forEach.call(form.elements, element => {
    if (element.type != 'submit' && fields[element.name] != '') {
      element.value = fields[element.name];
    }
  });
}

let fields = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
if (fields != null) {
  fillForm(fields);
} else {
  fields = {};
}

function checkForm(event) {
  Array.prototype.forEach.call(event.currentTarget.elements, element => {
    if (element.type != 'submit') {
      fields[element.name] = element.value;
    }
  });
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(fields));
}

const throttled = throttle(checkForm, 500, { leading: true, trailing: false });
form.addEventListener('input', throttled);

function handleSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.clear();
  console.log(fields);
}

form.addEventListener('submit', handleSubmit);
