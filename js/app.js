'use strict';

let sum=0;



function ansNo(cusAns) {

  if(cusAns ==='y' || cusAns==='yes'){
    alert('Wrong!!');
    // console.log(cusAns);
  }
  else if(cusAns === 'n'|| cusAns=== 'no'){
    alert('Correct!!');
    sum=sum+1;
  } else{
    alert('TRY ANOTHER FORM OF ANSWER!!');
  }
}


function ansYes(cusAns) {
  if(cusAns ==='y' || cusAns==='yes'){
    alert('Correct');
    console.log(cusAns);
    sum=sum+1;
  }
  else if(cusAns === 'n'|| cusAns=== 'no'){
    alert('Wrong');
  } else{
    alert('TRY ANOTHER FORM OF ANSWER!!');
  }
  
}
let userName=prompt('The Gussing ABOUT ME Game!! Kindlly Enter Your Name!!');
alert('WELCOME '+userName+' !!');
alert('My Name is Eman, I am Happy to give you some information about me!');
alert('Level 1');
confirm('let us get started :)');
let gam1=prompt('Do you think I am a web developer? [Y/N]').toLowerCase();
ansNo(gam1)


let gam2=prompt('Do you think I will be a good web developer? [Y/N]').toLowerCase();
ansYes(gam2)

let gam3=prompt('Did I finished my bachelors degree or NOT? [Y/N]').toLowerCase();
ansYes(gam3)

let gam4=prompt('Do I Know any other programming languages? [Y/N]').toLowerCase();
ansYes(gam4)


let gam5=prompt('Do you think I will finish this course successfully? [Y/N]').toLowerCase();
ansYes(gam5)


alert('LEVEL 2');

let hitArray=['I was born in th 90s','I finished all the study levels','Am almost a 1/4 century','Is the same as 12*2'];

function q6() {

  
for (let i=0; i<hitArray.length; i++){
  let gam6=prompt('How Much Do You Think My Age Is? ');
  let conArr=parseInt(gam6);
  if (conArr===24){
    alert('That is the right answer!!');
    console.log(gam6);
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
}
q6()
alert('The Correct Answer is 24');
  


let favMovies=['you have got mail','castaway','forrest gump','saving private ryan'];
let hitArray2=['The Star in all the list is TOM HANKS','if you now WILSON you may have known one of them','one of them is based on real story about war','the other one is about Emails','mage rayn is the star in the other one','one of them is based on the 1986 novel with the same name by Winston Groom'];

function q7() {
  for(let j=0;j<6;j++){
    let MovGuss=prompt('Guss one of my favorte movies').toLowerCase();
    if (MovGuss===favMovies[0] || MovGuss===favMovies[1] || MovGuss===favMovies[2] || MovGuss===favMovies[3] ){
      alert('You Gussed it right ');
      console.log(MovGuss);
      sum=sum+1;
      break;
    }
    else{
      alert('Here is a hint '+hitArray2[j]+' !!');
    }
  }
  alert('The movies list is: '+favMovies);
  
}

q7()



alert('Thank you for your time in trying to guss my info '+userName+' :)');
alert('The number of correct answers entered is: '+sum);

