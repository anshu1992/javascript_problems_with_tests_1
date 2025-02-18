/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    const startTime = Date.now();
    let sum = 0;

    for (let index = 1; index <= n; index++) {
        sum += index;
    }

    const endTime = Date.now();
    return (endTime - startTime) / 1000;
}

console.log('For 100', calculateTime(100));
console.log('For 100000', calculateTime(100000));
console.log('For 1000000000', calculateTime(1000000000));
