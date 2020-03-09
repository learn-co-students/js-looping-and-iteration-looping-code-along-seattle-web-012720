// Code your solutions in this file
const names = ['Ada', 'Brendan', 'Ali']
let thanks = []
function writeCards(names){
    for (let i = 0; i < names.length; i++){
        thanks.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return thanks
}

function countDown(num){
    while (num > -1 ){
        console.log(num--);
    } 
}