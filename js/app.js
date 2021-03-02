'use strict';

let sum=0;

let userName=prompt('The Gussing ABOUT ME Game!! Kindlly Enter Your Name!!');
alert('WELCOME '+userName+' !!');
alert('My Name is Eman, I am Happy to give you some information about me!');
alert('Level 1');
confirm('let us get started :)');
let gam1=prompt('Do you think I am a web developer? [Y/N]').toLowerCase();
if(gam1 ==='y' || gam1==='yes'){
  alert('No Not Yet!!');
  console.log(gam1);
}
else if(gam1 === 'n'|| gam1=== 'no'){
  alert('NO I am NOT a developer YET! But I will be Inshaallah!');
  sum=sum+1;
} else{
  alert('TRY ANOTHER FORM OF ANSWER!!');
}



let gam2=prompt('Do you think I will be a good web developer? [Y/N]').toLowerCase();
if(gam2 ==='y' || gam2==='yes'){
  alert('Until now Im good we will see about that!');
  console.log(gam1);
  sum=sum+1;
}
else if(gam2 === 'n'|| gam2=== 'no'){
  alert('Keep it positive please :(!!');
} else{
  alert('TRY ANOTHER FORM OF ANSWER!!');
}

let gam3=prompt('Did I finished my bachelors degree or NOT? [Y/N]').toLowerCase();
if(gam3 ==='y' || gam3==='yes'){
  alert('Yes I did,I hold BS in Biomedical Engineering');
  console.log(gam1);
  sum=sum+1;
} else if(gam3 === 'n'|| gam3=== 'no'){
  alert('you Wrong try to put yes another time!');
}else{
  alert('TRY ANOTHER FORM OF ANSWER!!');
}

let gam4=prompt('Do I Know any other programming languages? [Y/N]').toLowerCase();
if(gam4 ==='y' || gam4==='yes'){
  alert('Yes I am, I know C++, Python and lets considered MATLAB as one :)');
  console.log(gam1);
  sum=sum+1;
}
else if(gam4 === 'n'|| gam4=== 'no'){
  alert('No you wrong, I know some');
} else{
  alert('TRY ANOTHER FORM OF ANSWER!!');
}

let gam5=prompt('Do you think I will finish this course successfully? [Y/N]').toLowerCase();
if(gam5 ==='y' || gam5==='yes'){
  alert('I WILL, THANK YOU!!');
  console.log(gam1);
  sum=sum+1;
}
else if(gam5 === 'n'|| gam5=== 'no'){
  alert('I Will my friend I will,try to type another answer in the future :)');
} else{
  alert('TRY ANOTHER FORM OF ANSWER!!');
}
alert('LEVEL 2');

let hitArray=['I was born in th 90s','I finished all the study levels','Am almost a 1/4 century','Is the same as 12*2'];
for (let i=0; i<hitArray.length; i++){
  let gam6=prompt('How Much Do You Think My Age Is? ');
  let conArr=parseInt(gam6);
  if (conArr===24){
    alert('That is the right answer!!');
    sum=sum+1;
    break;
  }else {
    if(conArr<20){
      alert('Too low ');
    }else if(conArr>30){
      alert('Too high ');
    }
    else{
      alert(hitArray[i]);
    }
  }

}
alert('The Correct Answer is 24');

let favMovies=['you have got mail','castaway','forrest gump','saving private ryan'];
let hitArray2=['The Star in all the list is TOM HANKS','if you now WILSON you may have known one of them','one of them is based on real story about war','the other one is about Emails','mage rayn is the star in the other one','one of them is based on the 1986 novel with the same name by Winston Groom'];
for(let j=0;j<6;j++){
  let MovGuss=prompt('Guss one of my favorte movies').toLowerCase();
  if (MovGuss===favMovies[0] || MovGuss===favMovies[1] || MovGuss===favMovies[2] || MovGuss===favMovies[3] ){
    alert('You Gussed it right ');
    sum=sum+1;
    break;
  }
  else{
    alert('Here is a hint '+hitArray2[j]+' !!');
  }
}
alert('The movies list is: '+favMovies);



alert('Thank you for your time in trying to guss my info '+userName+' :)');
alert('The number of correct answers entered is: '+sum);

