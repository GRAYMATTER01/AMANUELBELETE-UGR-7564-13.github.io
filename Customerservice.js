const form = document.getElementById('form');
const email = document.getElementById('Emailadress');
const firstnam = document.getElementById('Firstname');
const middlenam = document.getElementById('Middlename');
const lastnam = document.getElementById('Lastname');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = ('element,message') => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');


    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('succes')

}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('succes');
    inputControl.classList.remove('error')
};
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = emailValue.trim();
    const firstnamValue = firstnamValue.trim();
    const middlenamValue = middlenamValue.trim();
    const lastnamValue = lastnamValue.trim();

    if(emailValue === '') {
        setError(email, 'email is required');

    } else if (!isValidEmail(emailValue)) {
        setError(email, 'provide a valid email address');
    } else {
        setSuccess(email);
    }
    if(firstnamValue === '') {
        setError(firstnam, 'firstnam is required');

    } else { 
        setSuccess(firstnam);
    }
    if(middlenamValue === '') {
        setError(middlenam, 'middlenam is required');

    } else { 
        setSuccess(middlenam);
    }
    if(lastnamValue === '') {
        setError(lastnam, 'lastnam is required');

    } else { 
        setSuccess(lastnam);
    }



};