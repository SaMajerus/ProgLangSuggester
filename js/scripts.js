/*    Business Logic    */ 
function evalAnswers(a1, a2, a3, a4, a5){  //Determines what best suggestion is for user (using 'Rating Variables') depending on their responses. 
  
  //'Rating' variables for each of the four languages choices. The variable with the greatest number-value [after processing] is the one whose language is suggested. 
  let sharp = 0;  //C#
  let java = 0;  //Javascript
  let pyth = 0;  //Python
  let swift = 0;  //var for 'Swift'. 

  //Question 1 
  if(a1 === 1) {
    pyth+=1; //Increment by 1
  } else if(a1 === 2) { 
    java+=1; 
  } else if(a1 === 3) { 
    sharp+=1; 
  } else if(a1 === 4) { 
    swift+=1; 
  } else if(a1 === 5) {     
    sharp+=1; 
    java+=1; 
    pyth+=1; 
    swift+=1; 
  } else {  //Case 6 
    sharp+=1; 
    java+=1; 
    pyth+=1;
  }  //Else: increment nothing, move on to next question

  //Question 2 
  if(a2 === 1){ 
    pyth+=3; //Increment by 3
  }else if(a2 === 2) { 
    pyth+=2; //Increment by 2
  } else if(a2 === 3) { 
    pyth+=1; 
  } else if(a2 === 4) { 
    sharp+=1; 
    java+=1; 
    pyth+=1; 
    swift+=1; 
  } else {  //Cases 5 or 6--  Case 5: (a2 === 5),   Case 6: (a2 === 6). 
    sharp+=2; 
    java+=2; 
    swift+=2; 
  }  //Else: increment nothing, move on to next question 

  //Question 3 
  if(a3 === 1) { 
    java+=2; 
  } else if(a3 === 2) {
    java+=1; 
  } else {  //Case 3: (a3 === 3) 
    sharp+=1; 
    pyth+=1; 
    swift+=1; 
  }  //Else: increment nothing, move on to next question 

  //Question 4 
  if(a4 === 1) {
    //Increment all by 1 
    sharp+=1; 
    java+=1; 
    pyth+=1; 
    swift+=1; 
  } else if(a4 === 2) {
    java+=2;  //Increment by 1
  } else if(a4 === 3) {
    //Increment JS by 2, everything else by 1 
    sharp+=1; 
    java+=2; 
    pyth+=1; 
    swift+=1; 
  } else if(a4 === 4) {
    //Increment JS and C# by 1
    java+=1; 
    sharp+=1; 
  } else if(a4 === 5) {    
    pyth+=3; //Increment Py by 3 
  } else if(a4 === 6) {  
    sharp+=2; 
    java+=2; 
    pyth+=2; 
    swift+=1; 
  } else if(a4 === 7) { 
    sharp+=2; 
    java+=3; 
    pyth+=2; 
    swift+=2; 
  } else {  //Case 8: (a4 === 8) 
    sharp+=3; 
    java+=3; 
    pyth+=3; 
    swift+=3; 
  }  //Else: increment nothing, move on to next question 

  //Question 5 
  if(a5 === 1) {  
    sharp+=2; 
    java+=1; 
    pyth+=2; 
    swift+=2; 
  } //Else: increment nothing, move on to next instruction 

  return (evalRatings(sharp, java, pyth, swift));
}

function evalRatings(r1, r2, r3, r4){  //Accepts the 'rating variables' from 'evalAnswers' function as parameters 
  if( (r1 > r2) && (r1 > r3) && (r1 > r4) ) {  //If Rating val for   C#   is > all 3 others.
    return("C#"); 
  } else if ( (r2 > r1) && (r2 > r3) && (r2 > r4) ) {  //If Rating val for   JavaScript   is > all 3 others.
    return("Javascript"); 
  } else if( (r3 > r1) && (r3 > r2) && (r3 > r4) ) {  //If Rating val for   Python   is > all 3 others.
    return("Python"); 
  } else if( (r4 > r1) && (r4 > r2) && (r4 > r3) ) {  //If Rating val for   Swift   is > all 3 others.
    return("Swift"); 
  } else {   //IF-and-only-if [IFF]  two or more Rating variables are equal in value (and greater than the others in value). 
    return("It was a tie between 2 or more languages. Retake the quiz?");  // I won't do logic that will give the User a more specific answer [yet], because the reqs for this week's Code Review tell us not to suggest two or more Programming Languages at the same time. 
  } 
}

/*   User Interface (UI) Logic    */  
function handleQzAns(event){  //Handles user's submitted answers 
  event.preventDefault(); //Prevents default behavior of 'omsubmit' event from occurring (which would prevent the page from functioning as intended). 
  let result; //Initializes an empty variable. Will have a suggestion-value saved to it before the function returns this var to the function-caller. 
  
  //Retrieves user's answers, saves them. 
  const one = parseInt(document.getElementById("ans1").value); 
  const two = parseInt(document.getElementById("ans2").value); 
  const three = parseInt(document.getElementById("ans3").value); 
  const four = parseInt(document.getElementById("ans4").value); 
  const five = parseInt(document.getElementById("ans5").value);  

  result = evalAnswers(one, two, three, four, five); 
  
  //Resets each select-box to the default 'blank' answer once results are submitted to Business Logic functions for evaluation. 
  document.querySelector("select#ans1").value = "0"; 
  document.querySelector("select#ans2").value = "0"; 
  document.querySelector("select#ans3").value = "0"; 
  document.querySelector("select#ans4").value = "0"; 
  document.querySelector("select#ans5").value = "0"; 
  
  //Shows result-section Header, prints ProgLang suggestion.
  document.getElementById("sgn-hdr").removeAttribute("class");
  document.getElementById("suggestion").innerText = result;   
} 

window.addEventListener("load", function(){
  const quiz = document.getElementById("Qs"); 
  quiz.addEventListener("submit", handleQzAns); 
}); 
