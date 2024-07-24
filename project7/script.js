const inputEnter = document.getElementsByClassName('enter')[0];
const checkButton = document.getElementsByClassName('input-button')[0];
const Output = document.getElementById('output-show');

function handleCheckBtnClick() {
    const inputValue = inputEnter.value;
    if (!inputValue) {
        Output.innerText = "Enter the Word";
        return;
    }
    const cleanedText = cleanText(inputValue);
    if (checkPalindrome(cleanedText)) {
        Output.innerText = cleanedText + ' is a palindrome';
    } else {
        Output.innerText = cleanedText + ' is not a palindrome';
    }
}

function cleanText(text) {
    text = text.toLowerCase();
    const validRegex = /[a-z]|[0-9]/g;
    const validChars = text.match(validRegex);
    const cleanedText = validChars.join('');
    return cleanedText;
}

function checkPalindrome(text) {
    const reversedText = text.split('').reverse().join('');
    return reversedText === text;
}

checkButton.addEventListener('click', handleCheckBtnClick);
