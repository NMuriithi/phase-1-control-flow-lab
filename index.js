//Lab practice on declaring functions.
//Lesson on Conditional statements:if statements, switch statements, and ternary expressions
function scuberGreetingForFeet(distanceInFeet){
// syntax : function givenName (parameters){expression}.
// Everything I want my function to do I put inside these curly braces
// syntax : if (condition) { block of code }

  if (distanceInFeet >= 2501){
    return ('No can do.') 
  }
  else if (distanceInFeet >=2001){
     return ('I will gladly take your thirty bucks.')
  }
  else if (distanceInFeet <= 400) {
    return ('This one is on me!') 
  }
}
  function ternaryCheckCity(destination){
    let NYC;
    const decision = (destination === NYC)? "Ok, sounds good." : "No go.";
    return decision;
}

function switchOnCharmFromTip(tipAmount){
  let goodByeMessage;
  switch (tipAmount) {
    case "generous" :{ let goodByeMessage = "Thank you so much." 
  console.log (goodByeMessage) 
  break;
 }
  
    case "not as generous": {
      let goodByeMessage = "Thank you.";
      console.log(goodByeMessage);
      break; 
    }
     default: {
      let goodByeMessage = "Thanks for everything" + "Bye";
      console.log(goodByeMessage);
      break;
    }
    
  }
}
















