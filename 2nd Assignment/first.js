let age = parseInt(prompt("Enter your age"));
let isStudent = prompt ("Are you student? Enter your answer in Y or N");
if (age<12){
    alert("Ticket price is $5");
}
else if (age>12 && age<=18){
    if(isStudent=="Y" || isStudent=="y" ){
    alert("Ticket price is $8");
}
  else{
    alert("Ticket price is $10");
  } 
   
}

else {
    alert("Ticket price is $12");
}
