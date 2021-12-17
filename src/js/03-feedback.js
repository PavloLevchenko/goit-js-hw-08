import throttle from 'lodash/throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const THROTLE_DELAY = 500;

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

function saveForm(elements) {
  Array.prototype.forEach.call(elements, element => {
    if (element.type != 'submit') {
      fields[element.name] = element.value;
    }
  });

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(fields));
}

const throttled = throttle(saveForm, THROTLE_DELAY);

function checkForm(event) {
  throttled(event.currentTarget.elements);
}

form.addEventListener('input', checkForm);

function handleSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.clear();
  console.log(fields);
}

form.addEventListener('submit', handleSubmit);
