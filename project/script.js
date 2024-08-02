const button = document.getElementById('button');
const start = document.querySelector('.container');
const inputname = document.querySelector('.name1');
const emailname = document.querySelector('.mail');
const first = document.getElementById('start');

button.addEventListener('click', () => {
    
    const existingMessages = start.querySelectorAll('.message');
    existingMessages.forEach((msg) => msg.remove());

    if (inputname.value === '' && emailname.value) {
        let error = document.createElement('div');
        error.classList.add('message');
        error.innerText = 'Name is not entered';
        start.appendChild(error);
    }
    if (emailname.value === '' && inputname.value) {
        let error = document.createElement('div');
        error.classList.add('message');
        error.innerText = 'Email is not entered';
        start.appendChild(error);
    }
    if (inputname.value === '' && emailname.value === '') {
        let error = document.createElement('div');
        error.classList.add('message');
        error.innerText = 'Name and Email are not entered';
        start.appendChild(error);
    }

    if (inputname.value && emailname.value) {
        let success = document.createElement('div');
        success.classList.add('message'); 
        success.innerText = 'Login sucessfull';
        start.appendChild(success);
    }
  
});


