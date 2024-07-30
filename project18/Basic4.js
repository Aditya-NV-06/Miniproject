//loops in js


for (let i=0;i<10;i++){ 
    console.log(i);
}

console.log("for is completed");
let j=5;

while(j<10){ 
    console.log(j);
    j++;
}
console.log("while completed");

//do-while loop
let a=13;
do {
 a++;
 console.log(a);
}while(a<=10)

    console.log('do while finished');
//for  of  loop
let a1=[1,0,3,4,5];

for (let i of a1){ 
    console.log(i)//logs the value
}

console.log('for of finished')


//for in loop

let a2={name:"aditya",age:12}

for (let value in a2){ 
    console.log(a2[value]);
}


//functions are the reusable part in the every programming language
function add(a,b){ 
    return a,b;
}
add(5,2);

//callback
const add=(a,b)=>{ 
    return a+b;
}
add(23,45);