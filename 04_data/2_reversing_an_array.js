// Reversing an array

// Your code here.
function reverseArray(array) {
    let newArr = [];
    for (i = array.length - 1; i >= 0; i--) {
        newArr.push(array[i]);
    }
    return newArr;
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < array.length / 2; i++) {
        let oppositeIndex = array.length - 1 - i;
        let tmp = array[i];
        array[i] = array[oppositeIndex];
        array[oppositeIndex] = tmp;
    }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]