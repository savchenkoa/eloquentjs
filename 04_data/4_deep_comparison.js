// Deep comparison

// Your code here.
function deepEqual(o1, o2) {
    if (o1 == o2) {
        return true;
    } else {
        let o1Keys = Object.keys(o1);
        for (const key of o1Keys) {
            if (typeof o1[key] === 'object' && o1[key] != null && 
                typeof o2[key] === 'object' && o2[key] != null) {
                return deepEqual(o1[key], o2[key]);
            } else {
                return o1[key] === o2[key];
            }
        }
    }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
