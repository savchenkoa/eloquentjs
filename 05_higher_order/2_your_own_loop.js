// Your code here.
function loop(val, test, update, body) {
    for (let v = val; test(v); v = update(v)) {
        body(v);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1