//Business Logic 
function evalAnswers (a1, a2, a3, a4, a5){  //Determines what user's Ans-combination is, and returns a language suggestion based on it. 
  
  /*   'Rating' variables for each of the four languages the suggestor has to choose from. 
    (The variable with the greatest number value after the answers have been processed is the one that gets suggested to the user.)  */ 
  let pyth = 0; 
  let sharp = 0; 
  let java = 0; 
  let swift = 0;  

  

}




//User Interface (UI) Logic  
function handleQzAns(event){  //Handles user's submitted answers 
  event.preventDefault();   //Prevents default behavior of 'omsubmit' event from occurring (which would prevent the page from functioning as intended). 

  let result; //Initializes an empty variable. Will have a suggestion-value saved to it before the function returns this var to the function-caller. 
  //Retrieves user's answers, saves them. 
  const one = document.getElementById("ans1").value; 
  const two = document.getElementById("ans2").value; 
  const three = document.getElementById("ans3").value; 
  const four = document.getElementById("ans4").value; 
  const five = document.getElementById("ans5").value; 

  /*Next line commented out temporarily until the function is finished.*/ 
  //result = evalAnswers(one, two, three, four, five);   

} 

