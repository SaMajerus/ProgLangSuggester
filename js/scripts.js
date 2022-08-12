/*    Business Logic    */ 

function evalAnswers(a1, a2, a3, a4, a5){  //Determines what best suggestion is for user (using 'Rating Variables') depending on their responses. 
  
  /*   'Rating' variables for each of the four languages the suggestor has to choose from. 
    (The variable with the greatest number value after the answers have been processed is the one that gets suggested to the user.)  */ 
  let sharp;  //C#
  sharp=0; //Initializes value to 0
  let java;  //Javascript
  java=0; //Initializes value to 0
  let pyth;  //Python
  pyth=0; //Initializes value to 0
  let swift;  //Swift 
  swift=0; //Initializes value to 0


  //Question 1 
  if(a1 === 1) {
    pyth+=1;  //Increment by 1
  } else if(a1 === 2) {
    java+=1;  //Increment by 1
  } else if(a1 === 3) {
    sharp+=1;  //Increment by 1
  } else if(a1 === 4) {
    swift+=1;  //Increment by 1
  } else if(a1 === 5) {  
    //Increment all four by 1 
    sharp+=1;  
    java+=1;  
    pyth+=1;  
    swift+=1; 
  }  //Else: increment nothing 



  //Question 2 
  if(a2 === 1) {
    pyth+=2;  //Increment by 2
  } else if(a2 === 2) {
    pyth+=1;  
  } else if(a2 === 3) {
    //Increment all four by 1 
    sharp+=1;  
    java+=1;  
    pyth+=1;  
    swift+=1;  
  } else if(a2 === 4) { 
    //Increment all except Python var. 
    sharp+=1; 
    java+=1; 
    swift+=1; 
  }  //Else: increment nothing 



  //Question 3 
  if(a3 === 1) {
    pyth+=1;  //Increment by 1
  } else if(a3 === 2) {
    java+=1;  //Increment by 1
  } else if(a3 === 3) {
    sharp+=1;  //Increment by 1
  } else if(a3 === 4) {
    swift+=1;  //Increment by 1
  } else if(a3 === 5) {  
    //Increment all four by 1 
    sharp+=1;  
    java+=1;  
    pyth+=1;  
    swift+=1; 
  }  //Else: increment nothing 



  //Question 4 
  if(a4 === 1) {
    pyth+=1;  //Increment by 1
  } else if(a1 === 2) {
    java+=1;  //Increment by 1
  } else if(a1 === 3) {
    sharp+=1;  //Increment by 1
  } else if(a1 === 4) {
    swift+=1;  //Increment by 1
  } else if(a1 === 5) {  
    //Increment all four by 1 
    sharp+=1;  
    java+=1;  
    pyth+=1;  
    swift+=1; 
  }  //Else: increment nothing 



  //Question 5 
  if(a5 === 1) {
    pyth+=1;  //Increment by 1
  } else if(a1 === 2) {
    java+=1;  //Increment by 1
  } else if(a1 === 3) {
    sharp+=1;  //Increment by 1
  } else if(a1 === 4) {
    swift+=1;  //Increment by 1
  } else if(a1 === 5) {  
    //Increment all four by 1 
    sharp+=1;  
    java+=1;  
    pyth+=1;  
    swift+=1; 
  }  //Else: increment nothing 



  return evalRatings(sharp, java, pyth, swift);
}

function evalRatings(r1, r2, r3, r4){  //Accepts the 'rating variables' from 'evalAnswers' function as parameters 
  let best; 

  if( (r1 > r2) && (r1 > r3) && (r1 > r4) ) {  //If Rating val for   C#   is > all 3 others.
    best = "C#"; 
  } else if ( (r2 > r1) && (r2 > r3) && (r2 > r4) ) {  //If Rating val for   JavaScript   is > all 3 others.
    best = "Javascript"; 
  } else if( (r3 > r1) && (r3 > r2) && (r3 > r4) ) {  //If Rating val for   Python   is > all 3 others.
    best = "Python"; 
  } else if( (r4 > r1) && (r4 > r2) && (r4 > r3) ) {  //If Rating val for   Swift   is > all 3 others.
    best = "Swift"; 
  } else {   //IF-and-only-if [IFF]  two or more Rating variables are equal in value (and greater than the others in value). 
    best = "It was a tie between at least two of the languages. Take the quiz again?"  /*  Won't do logic that will give the User a more specific answer [yet], because 
    the Code Review's requirements forbid us from suggesting two or more Programming Languages to the user.  */  

  }

  return best;
}







/*   User Interface (UI) Logic    */ 
function handleQzAns(event){  //Handles user's submitted answers 
  event.preventDefault();   //Prevents default behavior of 'omsubmit' event from occurring (which would prevent the page from functioning as intended). 

  let result; //Initializes an empty variable. Will have a suggestion-value saved to it before the function returns this var to the function-caller. 
  //Retrieves user's answers, saves them. 
  const one = parseInt(document.getElementById("ans1").value); 
  const two = parseInt(document.getElementById("ans2").value); 
  const three = parseInt(document.getElementById("ans3").value); 
  const four = parseInt(document.getElementById("ans4").value); 
  const five = parseInt(document.getElementById("ans5").value);  

  /*Next line commented out temporarily until the function is finished.*/ 
  //result = evalAnswers(one, two, three, four, five);   

  document.getElementById("suggestion").innerText = result; 
} 


window.addEventListener("load", function(){
  const quiz = document.getElementById("Qs"); 
  quiz.addEventListener("submit", handleQzAns);
}); 