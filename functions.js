
function getRandomLottery(){

    var numbers = new Set();

    while(numbers.size < 6){

        let random = Math.floor(Math.random() * 59) + 1;

        numbers.add(random);
    }

    return [...numbers].join(", ") + ".";
}

function displayInitial(){
    return "Your random number is ";
}

export {
    getRandomLottery,
    displayInitial
}

// module.exports = {
//     getRandomLottery,
//     displayInitial
// };