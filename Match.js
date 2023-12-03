

    let n1=document.getElementById("number1");
    let n2=document.getElementById("number2");
    let mh=document.getElementById("match");
    let sub=document.getElementById("submit");
let cal=["+","-","*","/"];

function addrandom1(){
let p1=Math.random()*(100-0)+0;
   let t1=Math.floor(p1);
   n1.innerHTML=t1;
 
}

function addrandom2(){

    let p2=Math.random()*(100-0)+0;
    let t2=Math.floor(p2);
    n2.innerHTML=t2;
}

function calc(){
    let p3=Math.random()*(4-0)+0;
    let t3=Math.floor(p3);
mh.innerHTML=cal[t3];
}
sub.addEventListener("click",function(){
    addrandom1();
    addrandom2();
    calc();
})
 





   



   





