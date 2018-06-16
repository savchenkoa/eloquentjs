// Your code here.
// A list
function arrayToList(array) {
    let listStart = {
        value: array[0],
        rest: null
    };
    let first = listStart;
    for (let i = 1; i < array.length; i++) {
        let next = {
            value: array[i],
            rest: null
        };
        first.next = next;
        first = next;
    }
    return listStart;
}

function listToArray(list) {
    let array = [];
    while (list != null) {
        array.push(list.value);
        list = list.next;
    }
    return array;
}

function prepend(element, list) {
    let newList = {
        value: element,
        next: list
    };
    return newList;
}

function nth(list, n) {
    let i = 0;
    let currentItem = list;
    while (i < n && currentItem) {
        currentItem = currentItem.next;
        i++;
    }
    return i === n - 1 ? currentItem.value : undefined;
}

function nthRec(list, n, i) {
    if (i === undefined) {
        return nthRec(list, n, 0);
    } else if (i < n) {
        return nthRec(list.next, n, i + 1);
    } else {
        return list ? list.value : undefined;
    }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20