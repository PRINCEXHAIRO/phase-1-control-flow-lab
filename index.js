function scuberGreetingForFeet(ride) {

  if (ride<=400) { 
    return 'This one is on me!'
  } else if (ride<=2000) {
      return "That will be twenty bucks."
  } else if(ride<=2500) {
     return 'I will gladly take your thirty bucks.'
  } else{
     return 'No can do.'
  };
};
console.log(scuberGreetingForFeet(44))

function ternaryCheckCity(city) { 

  const checkIt = city === "NYC" ? 'Ok, sounds good.' : 'No go.' ;
  return checkIt;
};
console.log(ternaryCheckCity("NYC"))

function switchOnCharmFromTip(whatsTheTip){
  // Write your code here!
  switch (whatsTheTip) { 
    case 'generous': 
        return 'Thank you so much.'
    case 'not as generous':
        return 'Thank you.'
    default: 
        return 'Bye.'
  };
};

console.log('generous')