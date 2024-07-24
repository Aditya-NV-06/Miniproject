const input = document.getElementById('input');
const buttons = document.querySelectorAll('.btn'); // Corrected variable name

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                string = eval(string); // Evaluate expression
                input.value = string;
            } catch (error) {
                input.value = 'Error'; // Handle invalid expressions
            }
        } 
            else{
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
