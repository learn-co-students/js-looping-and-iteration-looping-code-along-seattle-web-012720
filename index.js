// Code your solutions in this file

function writeCards(names, message) {
    const array = [];
    for (let i = 0; i < names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`);
      }
      return array
}

function countDown(number) {
    while (number > -1) {
        console.log(number)
        number -= 1  
    }
}