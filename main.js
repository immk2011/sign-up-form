let password = document.querySelector('#pass');
let confirmPassword = document.querySelector('#pass-true');

function validatePassword() {
    if(password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity(`Passwords don't match.`)
    } else {
        confirmPassword.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;