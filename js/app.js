'use strict';


let userName=prompt('The Gussing ABOUT ME Game!! Kindlly Enter Your Name');
alert('WELCOME '+userName+' !!');
alert('My Name is Eman, I am Happy to give you some information about me!');
confirm('let us get started :)');
let sum=0;
let gam1=prompt('Do you think I am a web developer? [Y/N]').toLowerCase();
if(gam1 ==='y' || gam1==='yes'){
  alert('No Not Yet!!');
  console.log(gam1);
  sum=sum+1;
}
else if(gam1 === 'n'|| gam1=== 'no'){
  alert('NO I am NOT a developer YET! But I will be Inshaallah!');
} else{
  alert('TRY ANOTHER FORM OF ANSWER!!');
}



let gam2=prompt('Do you think I will be a good web developer? [Y/N]').toLowerCase();
if(gam2 ==='y' || gam2==='yes'){
  alert('Until now Im good we will see about that!');
  console.log(gam1);
}
else if(gam2 === 'n'|| gam2=== 'no'){
  alert('Keep it positive please :(!!');
  sum=sum+1;
} else{
  alert('TRY ANOTHER FORM OF ANSWER!!');
}

let gam3=prompt('Did I finished my bachelors degree or NOT? [Y/N]').toLowerCase();
if(gam3 ==='y' || gam3==='yes'){
  alert('Yes I did,I hold BS in Biomedical Engineering');
  console.log(gam1);
} else if(gam3 === 'n'|| gam3=== 'no'){
  alert('you Wrong try to put yes another time!');
  sum=sum+1;
}else{
  alert('TRY ANOTHER FORM OF ANSWER!!');
}

let gam4=prompt('Do I Know any other programming languages? [Y/N]').toLowerCase();
if(gam4 ==='y' || gam4==='yes'){
  alert('Yes I am, I know C++, Python and lets considered MATLAB as one :)');
  console.log(gam1);
}
else if(gam4 === 'n'|| gam4=== 'no'){
  alert('No you wrong, I know some');
  sum=sum+1;
} else{
  alert('TRY ANOTHER FORM OF ANSWER!!');
}

let gam5=prompt('Do you think I will finish this course successfully? [Y/N]').toLowerCase();
if(gam5 ==='y' || gam5==='yes'){
  alert('I WILL, THANK YOU!!');
  console.log(gam1);
}
else if(gam5 === 'n'|| gam5=== 'no'){
  alert('I Will my friend I will,try to type another answer in the future :)');
  sum=sum+1;
} else{
  alert('TRY ANOTHER FORM OF ANSWER!!');
}

alert('Thank you for your time in trying to guss my info '+userName+':)');
alert('The number of wrong answers entered is: '+sum);

