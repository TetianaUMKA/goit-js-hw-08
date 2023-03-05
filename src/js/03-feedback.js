import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(() => {
    const dataToSave = { email: email.value, message: message.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataToSave));
  }, 500)
);

form.addEventListener('submit', event => {
  event.preventDefault();

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all fields!');
  }

  console.log({ email: email.value, message: message.value });

  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
});

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const inputDataStorage = load(LOCALSTORAGE_KEY);

if (inputDataStorage) {
  email.value = inputDataStorage.email;
  message.value = inputDataStorage.message;
}