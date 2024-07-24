const button=document.querySelector('#n');
const quote=document.querySelector('.quote');
const person=document.querySelector('.person');


const quotecontent=[{ 
    quote:'lorem10',
    person:'karan'
},
{ 
    quote:'lorem1',
    person:'aditya'
},
{ 
    quote:'lorem2',
    person:'rangeena'
},
{ 
    quote:'lorem3',
    person:'viwsanathan'
},
];


button.addEventListener('click',()=>{
     let random=Math.floor(Math.random()*quotecontent.length);

     quote.innerText=quotecontent[random].quote;
     person.innerText=quotecontent[random].person;   
})