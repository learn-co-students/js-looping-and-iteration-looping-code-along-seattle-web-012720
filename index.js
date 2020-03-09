// Code your solutions in this file
function writeCards(array, event_name) {
    const arr = []
    let i = 0;
    while (i < array.length) {
        let sentence = "Thank you, " + array[i] + ", for the wonderful surprise gift!"
        arr.push(sentence)
        i++;
      }
    return arr;
}

function countDown(int) {
    for (let countdown = int; countdown >= 0; countdown--) {
        console.log(countdown);
      }
}