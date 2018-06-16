// Persistent group
class PGroup {
    constructor(array) {
        this.values = array;
    }

    add(newValue) {
        if (!this.has(newValue)) {
            let newArray = this.values.concat(newValue);
            return new PGroup(newArray);
        }
    }

    has(value) {
        return this.values.includes(value);
    }

    delete(value) {
        if (this.has(value)) {
            return new PGroup(this.values.filter(v => v !== value));
        }
        return this;
    }
}
PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false