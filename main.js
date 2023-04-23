let password = document.querySelector('#pass');
let confirmPassword = document.querySelector('#pass-true');

function validatePassword() {
    if(password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity(`Passwords don't match.`)
        confirmPassword.style.borderColor = 'red';
    } else {
        confirmPassword.setCustomValidity('');
        confirmPassword.style.borderColor = 'rgb(104, 104, 255)';
    }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;