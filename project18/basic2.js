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