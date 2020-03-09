// Code your solutions in this file
function writeCards(arrayOfStrings, eventName) {
    const thankYous = []
    for (let i = 0; i < arrayOfStrings.length; i++) {
      thankYous.push(`Thank you, ${arrayOfStrings[i]}, for the wonderful ${eventName} gift!`);
    }
  
    return thankYous;
  }

  function countDown(number) {
    while (number >= 0) {
      console.log(number--);
    }
  }