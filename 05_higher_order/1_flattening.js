// Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]
function flatten(arrays) {
    return arrays.reduce((current, next) => {
        return current.concat(next);
    })
}
