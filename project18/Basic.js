
//comments


//variables
let rr=5;
let cc=2;
let ee=1;
let ff=3;


if(rr>cc){ 
  ee++;
}
if(cc>=rr){ 
  ff++;
}

let result=rr+cc+ee+ff;
//to print the output in the console
console.log(result);


let ttt=23;

//conditional

if(ttt<0){ 
  console.log('freezing');
}
else if(ttt>=0 && ttt<=10){ 
   console.log('Cold');
}
else if(ttt>=11 && ttt<=25){ 
  console.log('Warm');
}
else{ 
  console.log("Hot");
}


let nsub=3;
let math=95;
let sci=85;
let eng=76;
let answer=(math+sci+eng)/nsub;


if(answer>90){ 
  console.log('A');
}
else if(answer>=80 && answer<=89){ 
   console.log('B');
}
else if(answer>=70 && answer<=79){ 
  console.log('C');
}
else if(answer>=60 && answer<=69){ 
  console.log('D');
}
else{ 
  console.log("F");
}