document.getElementById("loginForm").addEventListener('submit',function(event){
    event.preventDefault();

    const username=document.getElementById('username');
    const password=document.getElementById('password');

    const usernamevalue=username.value.trim();
    const passwordvalue=password.value.trim();
    if (usernamevalue === '') {
        setError(username,"User Name cannot be Empty !");
        
    }
    else{
        setSuccess(username);
    }

    if (passwordvalue === '') {
        setError(password,"Password cannot be Empty !");
        
    }
    else{
        setSuccess(password);
    }

    if(usernamevalue !== '' && passwordvalue !=='')
        {
        alert("Login Successful !");
    }
});

function setError(element ,message){
    const formGroup =element.parentElement;
    formGroup.className="form-group error";
    const small=formGroup.querySelector('small');
    small.innerText=message;
}

function setSuccess(element){
    const formGroup =element.parentElement;
    formGroup.className="form-group success";

}