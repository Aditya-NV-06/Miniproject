const input = document.querySelector('input');
const button = document.querySelector('button');
const contentdisplay = document.querySelector('.contentdisplay');

button.addEventListener("click", () => {
    async function apicall() {
        const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + input.value; // Use input value directly in the URL

        try {
            const res = await fetch(url, {
                method: 'GET', // Changed to GET as the API might not support POST
                headers: {
                    "Content-Type": 'application/json'
                },
                
            });
            if (!res.ok) {
                throw new Error('Error in the API fetch');
            }
            const result = await res.json();
            const definition = result[0].meanings[0].definitions[0].definition;
            contentdisplay.innerText=definition;// Format JSON for better readability
        } catch (error) {
            alert("Something went wrong: " + error.message);
        }
    }

    apicall(); // Call the function
});
