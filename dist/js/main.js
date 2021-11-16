const form = document.querySelector('.form');
const emailValidationMessage = document.querySelector('.emailValidationMessage');

const emailPattern = /\./;

form.addEventListener('submit', e => {
    e.preventDefault();

    if (!emailPattern.test(form.emailAddress.value) || form.emailAddress.value === '') {
        form.emailAddress.classList.add('input-error');
        
        emailValidationMessage.textContent = 'Please provide a valid email';      
    }
})