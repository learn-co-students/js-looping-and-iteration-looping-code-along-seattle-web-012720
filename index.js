function writeCards(collection, string) {
    const arr = [];
    for (let i = 0; i < collection.length; i++) {
        arr.push(`Thank you, ${collection[i]}, for the wonderful ${string} gift!`);
    }
    return arr;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}