function saybye(){
    console.log('Bye');
}


setTimeout(saybye,5000);

const fetch=(url,callback)=>{
    let a=new XMLHttpRequest;    
    a.open("GET",true);
    a.onreadystatechange=()=>{
        if(a.readyState=== 4 && a.status===200){
            callback(a.responseText)
        }
    };
    a.send();
}

fetch('https://www.djangoproject.com/start/overview/',(response )=>{console.log(response)});



// Create a promise
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = Math.random() > 0.5; // Simulate success or failure randomly
        if (success) {
            resolve("Operation was successful!");
        } else {
            reject("Operation failed.");
        }
    }, 2000);
});

// Handle the promise
myPromise
    .then((message) => {
        console.log(message); // Handle resolved promise
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Second operation was also successful!");
            }, 1000);
        });
    })
    .then((secondMessage) => {
        console.log(secondMessage); // Handle second resolved promise
    })
    .catch((error) =>{
        console.error(error); 
         // Handle rejected promise
    })
    .finally(() => {
        console.log("Promise has been settled (either resolved or rejected)."); // Cleanup actions
    })