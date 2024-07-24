const button =document.getElementById('button');
const start=document.querySelector('.container');
const inputname=document.querySelector('.name1');
const emailname=document.querySelector('.mail');
let timer;



button.addEventListener('click',()=>{
  if(inputname.value==="" && emailname.value){
  let error=document.createElement('div');
   start.appendChild(error);
   error.innerText="Name is not entered";
  }
  if(emailname.value==="" && inputname.value){ 
    let error=document.createElement('div');
   start.appendChild(error);
   error.innerText="Email is not entered";
  }
  if(inputname.value ===''&& emailname.value=== ''){ 
    let error=document.createElement('div');
    start.appendChild(error);
    error.innerText="Name and Email are  not entered";
  }

  if(inputname.value&& emailname.value){ 
    let sucess=document.createElement('div');
    start.appendChild(sucess);
    sucess.innerText="Data is Saved";
 
  }


 
})
