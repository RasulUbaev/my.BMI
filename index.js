var fName = prompt("Ismingizni kiriting!");
var mass = Number(prompt (`${fName} Assalomu alaykum! og'irligingizni kiriting? (kg)`));
var height = Number(prompt (`${fName} bo'yingiz uzunligini kiriting? (1.8 shaklda)`));
var BMI = mass / (height * height); 

console.log (BMI);
let p=document.querySelector(".underweight");
let p2=document.querySelector(".healthy__weight");
let p3=document.querySelector(".at__risk__of__overweight");
let p4=document.querySelector(".obesity");

if (BMI < 18.4) {
    p.innerHTML=`${fName} Sizda kam vazn aniqlandi (Underweight)`;
    p2.innerHTML="";
    p3.innerHTML="";
    p4.innerHTML="";
} 
else if (BMI>18.5 && BMI<=25 ) {
  p2.innerHTML=`${fName} Sizda me’yorda (normal)`;
  p.innerHTML="";
  p3.innerHTML="";
  p4.innerHTML="";
}
else if (BMI>25.1 && BMI<=30 ) {
  p3.innerHTML=`${fName} Sizda ortiqcha vazn bor`;
  p.innerHTML="";
  p2.innerHTML="";
  p4.innerHTML="";
}

else {
  p4.innerHTML=`${fName} Sizda juda katta semizlik va parhezga rioya qilish kerak`;
  p.innerHTML="";
  p2.innerHTML="";
  p3.innerHTML="";
}
  

 


  







