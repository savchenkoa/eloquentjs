// The sum of a range
function range(start, end, step = 1) {
    let range = [];

    function check(number, end) {
        if (start > end) {
            return number >= end;
        } else {
            return number <= end;
        }
    }

    for (let number = start; check(number, end); number += step) {
        range.push(number);
    }
    return range;
}

function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// Your code here.

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
