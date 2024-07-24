const lowerLetters = "abcdefghijklmnopqrstuvwxy z";
const upperletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";

const passlength = document.getElementById('length');
const selectLower = document.getElementById('lowercase');
const selectUpper = document.getElementById('uppercase'); // Fixed typo here
const selectNumber = document.getElementById('number');
const generateBtn = document.getElementById('generate');
const passwordOutput = document.getElementById('password');

let answer = () => {
    const length = parseInt(passlength.value);
    let characters = "";
    let password = "";

    if (selectLower.checked) {
        characters += lowerLetters;
    }
    if (selectUpper.checked) {
        characters += upperletters;
    }

    if (selectNumber.checked) {
        characters += numbers;
    }

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // Set the password directly instead of appending
    passwordOutput.value = password;
}

generateBtn.addEventListener("click", answer);
