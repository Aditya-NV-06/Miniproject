//dark mode
const dark=document.getElementById('dark');
const body=document.querySelector('body');

dark.addEventListener('click',()=>{
    body.classList.toggle("active");
 })

//form
const input=document.getElementById('formName');
const email=document.getElementById('formemail');
const show=document.getElementById('show');
const valid=document.getElementById('valid');

valid.addEventListener('click',()=>{ 
    if(input.value===''&&email.value===''){ 
       show.textContent="Enter name and email";
    }
    if(input.value===''&&email.value){ 
        show.textContent="Enter the Name";
    }
    if(email.value===''&&input.value){ 
        show.textContent="Enter the email";
    }
    if(input.value&&email.value){ 
        show.textContent="Thank You";
    }
})

//name 
document.addEventListener("DOMContentLoaded", () =>{
    const nameElement = document.getElementsByClassName("am");
    nameElement.style.position = "absolute";
});

