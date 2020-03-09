// Code your solutions in this file
for (let age = 30; age<40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];
 
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}
wrapGifts(gifts);

function writeCards(arrayOfNames, event) {
    const messages = []
    for (let i=0; i<arrayOfNames.length; i++) {
        messages.push((`Thank you, ${arrayOfNames[i]}, for the wonderful ${event} gift!`))
    } 
    return messages;
}

function countDown(int) {
    let counter = int
    while (counter >=0) {
        console.log(counter);
        counter -- ;
    }
}