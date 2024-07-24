let hour=document.querySelector('.hour');
let min=document.querySelector('.min');
let sec=document.querySelector('.sec');



function clock() {
    let time=new Date();
    let hrs=time.getHours();
    let mins=time.getMinutes();

    hrs=((((hrs*60)/12)*6)+90);

     hour.style.transform=`rotate(${hrs}deg)`;


     mins=(min*6)+90;
     mins.style.transform=`rotate(${mins}deg)`;


     let secs=time.getSeconds();
     secs=(secs*6)+90;
     secs.style.transform=`rotate(${secs}deg)`;
}
setInterval(clock,1000);
clock();

