const btn = document.querySelector('.send-message');
const myForm = document.querySelector('#myForm');
const nameInput = document.querySelector('#your-name');
const emailInput = document.querySelector('#your-email');
const msg = document.querySelector('.alert-msg');
const phoneInput =  document.querySelector('#your-phone');
const cityInput =  document.querySelector('#your-city');
const msgInput =  document.querySelector('#message');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerText = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        // console.log('success');
        btn.textContent = 'Thank you!';

        // clear the fields
        nameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';
        cityInput.value = '';
        msgInput.value = '';
    }
}