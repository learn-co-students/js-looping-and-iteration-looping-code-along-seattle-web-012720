// Code your solutions in this file

function writeCards(arr, holiday){
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(`Thank you, ${arr[i]}, for the wonderful ${holiday} gift!`)
    }
    return newArr;
}

function countDown(int){
    while (int >= 0) {
        console.log(int--);
    }
};