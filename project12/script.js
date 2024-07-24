const taskadd = document.getElementById('inputTask');
const button = document.getElementById('addtask');
const container = document.getElementById('input');

button.addEventListener('click', () => {

    let task = document.createElement('div');
    task.classList.add('input');

    let li = document.createElement('li');
    li.innerText = `${taskadd.value}`;
    task.appendChild(li);

    let checkButton = document.createElement("button");
    checkButton.classList.add('addtask');
    
    checkButton.innerText = 'Done'; // Corrected: checkButton.innerText = 'Done';
    task.appendChild(checkButton);


    checkButton.addEventListener('click',()=>{
         checkButton.innerText='Completed';
         taskadd.value='';
    })
    let deleteButton = document.createElement("button");
    deleteButton.classList.add('deltask');
    // Error: Incorrectly setting innerHTML to a button element. It should be just text.
    deleteButton.innerText = 'Delete'; // Corrected: deleteButton.innerText = 'Delete';
    task.appendChild(deleteButton);

    // Error: Missing code to append the task to the container.
   
    
    // Corrected: Adding this line to append the task to the container.
    deleteButton.addEventListener('click',(e)=>{
        let target=e.target;
        target.parentElement.remove();
    })
    if(taskadd.value===''){ 
        alert('Please Enter the value')
      }
      else{
        container.appendChild(task);
      }

     
      

   
});
