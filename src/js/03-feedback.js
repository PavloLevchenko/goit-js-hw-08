import throttle from 'lodash/throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

function fillForm(fields) {
  for (const element of form.elements) {
    if (element.type != 'submit' && fields[element.name] != '') {
      element.value = fields[element.name];
    }
  }
}

let fields = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
if (fields != null) {
  fillForm(fields);
} else {
  fields = {};
}
console.log(fields);
function checkForm(event) {
  for (const element of event.currentTarget.elements) {
    if (element.type != 'submit') {
      fields[element.name] = element.value;
    }
  }
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(fields));
}

const throttled = throttle(checkForm, 500, { leading: true, trailing: false });
form.addEventListener('input', throttled);

function handleSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log(fields);
}

form.addEventListener('submit', handleSubmit);
