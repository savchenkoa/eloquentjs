// Retry

class MultiplicatorUnitFailure extends Error { }

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure("Klunk");
    }
}

function reliableMultiply(a, b) {
    let result;
    // Your code here.
    while (result == undefined) {
        try {
            result = primitiveMultiply(a, b);
        } catch (e) {
            if (e instanceof MultiplicatorUnitFailure) {
                console.log('Multiply failed:' + e.message);
            } else {
                throw e;
            }
        }
    }
    return result;
}

console.log(reliableMultiply(8, 8));
// → 64
