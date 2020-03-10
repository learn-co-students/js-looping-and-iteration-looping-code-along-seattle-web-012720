function writeCards(arr, event) {
    const thankYou = [];
    for (let i =0; i < arr.length; i++){
        thankYou.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
    };
    return thankYou;
};

function countDown(num) {
    let i = 0
    while (i <= num) {
        console.log(num);
        num--;
    };
};