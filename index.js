const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

//const reducer = (previousValue, currentValue) => previousValue + currentValue;

// function reducer(previous, current) {
//     const returns = previous + current;
//     console.log(returns);
// }

// function reducer(arr, reducer, init) {
//     let accum = init; 
//     for (const element of arr) {
//         accum = reducer(accum, element)
//     };
//     return accum;
// }

//batteryBatches.reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue);

const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Code your solution here
//const totalBatteries = batteryBatches.reduce(recuder, 0)

//console.log(totalBatteries);
//const totalBatteries = batteryBatches.reduce(function(accumulator, element{return element + accumulator}), 0)

//index, batteryBatches