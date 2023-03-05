// import throttle from 'lodash.throttle';

// const formEl = document.querySelector('.feedback-form');
// const emailEl = document.querySelector('input[name="email"]');
// const messageEl = document.querySelector('textarea[name="message"]');
// const LOCALSTORAGE_KEY = 'feedback-form-state';

// const dataToSave = { emailEl: emailEl.value, messageEl: messageEl.value };

// formEl.addEventListener('input', throttle(() => {
//     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataToSave));
//   }, 500)
// );

// formEl.addEventListener('submit', event => {
//   event.preventDefault();

//   if (emailEl.value === '' || messageEl.value === '') {
//     return alert('Please fill in all fields!');
//   }

//   console.log(dataToSave);

//   formEl.reset();
//   localStorage.removeItem(LOCALSTORAGE_KEY);
// });

// const load = key => {
//   try {
//     const serializedState = localStorage.getItem(key);

//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error('Get state error: ', error.messageEl);
//   }
// };

// const storageData = load(LOCALSTORAGE_KEY);

// if (storageData) {
//   emailEl.value = storageData.emailEl;
//   messageEl.value = storageData.messageEl;
// }


import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener(
  'input',
  throttle(e => {
    const objectToSave = { email: email.value, message: message.value };

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectToSave));
  }, 500)
);

form.addEventListener('submit', e => {
  e.preventDefault();

  if (email.value === '' || message.value === '') {
    return alert('Заповніть всі поля!');
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

const storageData = load(LOCALSTORAGE_KEY);

if (storageData) {
  email.value = storageData.email;
  message.value = storageData.message;
}