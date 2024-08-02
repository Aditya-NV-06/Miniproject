document.getElementById("loginForm").addEventListener('submit',function(event){
    event.preventDefault();

    const un=document.getElementById('username');
    const pa=document.getElementById('password');

    const unv=un.value.trim();
    const pav=pa.value.trim();

    if(unv==''){
        setError(un,"password cannot me empty");
    }
    else{
        setsuccess(pa);
    }

        if(unv !=="" && pav !==""){
            alert('login successful');
        }
});

function setError(element ,message){
    const formGroup =element.parentElement;
    formGroup.className="form-group-error";
    const small=formGroup.querySelector('small');
    small.innerText=message;
}

function setsuccess(element){
    const formGroup =element.parentElement;
    formGroup.className="form-group-error";

}