import throttle from "lodash.throttle";

const LOCAL_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form')
const formData = {};
const dataFromLocalStorage = JSON.parse(localStorage.getItem(LOCAL_KEY));
form.elements.email.value = dataFromLocalStorage?.email || '';
form.elements.message.value = dataFromLocalStorage?.message || '';

formEl.addEventListener("submit", onFormSubmit);
formEl.addEventListener("input", onFormInput);

function onFormSubmit(event) {
  event.preventDefault();

  const localData = localStorage.getItem(LOCAL_KEY);
  const localDataObject = JSON.parse(localData);

  event.currentTarget.reset();

  localStorage.removeItem(LOCAL_KEY)

  console.log(localDataObject);
  }

function onFormInput(event) {
    formData[event.target.name] = event.target.value;

    const dataFromLocalStorage = JSON.parse(localStorage.getItem(LOCAL_KEY));
    localStorage.setItem(
      LOCAL_KEY,
      JSON.stringify({ ...dataFromLocalStorage, [event.target.name]: event.target.value })
    );
  }
  