//String methods in js

//length,slice(),substring(),substr(),replace(),replaceAll()
//toUpperCase(),toLowerCase90,concat(),trim()


//CharAt(index)

let string ="Hello World!";
console.log(string.charAt(1)) //return only the particular index

//concat(source , Destination)
let newstr=string.concat(" ","is my first program");
console.log(newstr);

//Includes-verifies whether the word is present in the string or not - return true or false
console.log(string.includes('Hello'));

//indexOf()
console.log(string.indexOf("World!"));

//lastindexof()
console.log(string.lastIndexOf("l"))

//replace(substring of the source,replace value to the string)
let replacestr=string.replace('World','javascript');
console.log(replacestr)

//replaceall()
let replace="I am am programmer".replaceAll('am',"going");
console.log(replace);

//slice 
let slice =string.slice(0,3);
console.log(slice);;

//split
let split=string.split('-');
console.log(split);

//substr
let substr=string.substring(0,5);
console.log(substr);

//uppercase
console.log(string.toUpperCase());

//lower
console.log(string.toLowerCase());

//trim
let trimmed="Hello , js";
console.log(trimmed.trim());


//foreach,map,filter,reduce,find,findIndex,some,every,indules,push,pop,unshift,shift,slice,splice,concat,reverse,sort


//for each
const arr=[1,2,3];
arr.forEach((value)=>console.log(value))

//map
arr.map((value)=>console.log(value*value))

//filter 
arr.filter((val)=>console.log(val % 2== 0))

//reduce
const newarr=arr.reduce((a,b)=>a+b,9);
console.log(newarr);

//find
const find =arr.find(element=>element+2);
console.log(find);

//indexof
const index=arr.findIndex(element=>element+1)
console.log(index)


//some 
const some=arr.some(element=>element %2==0);
console.log(some)

//every
const every=arr.some(element=>element %2==0);
console.log(every)

//push and pop
const  push=arr.push(5,6);
console.log(arr);

const pop=arr.pop(6);
console.log(arr);

//shift and unshift
const shift =arr.shift(0,1);
console.log(shift);

const unshift=arr.unshift(1,0)
console.log(arr);

//slice and splice
console.log(arr.slice(0,5));

console.log(arr.splice(2,1,2))


//join
console.log(arr.join('-'));

//reverse
console.log(arr.reverse())

//sort
console.log(arr.sort((a,b)=>a-b))

//flat
const nest=[[1,2],[2,3]];
console.log(nest.flat())


//objects
const student={ 
    name:"javascript",
     show:()=> { 
        console.log(`${this.name}`)
     }
}

console.log(student.show())