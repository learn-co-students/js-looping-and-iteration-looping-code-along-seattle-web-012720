// Code your solutions in this file
const thanks = []
function writeCards(arr, event) {
    for (let i = 0; i < arr.length; i++) {
        thanks.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
    }
    return thanks
}

function countDown(i) {
    while (i >= 0) {
        console.log(i)
        i--
    }
}