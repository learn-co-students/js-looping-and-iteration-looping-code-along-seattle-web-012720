function writeCards(array, name) {
    let returnArray = [];
    for(let i = 0; i < array.length; i++) {
        returnArray.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`);
    }
    return returnArray;
}

function countDown(positiveInteger) {
    while(positiveInteger >= 0) {
        console.log(positiveInteger)
        positiveInteger--;
    }
}