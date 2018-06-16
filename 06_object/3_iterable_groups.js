// Iterable groups

// Your code here (and the code from the previous exercise)

class Group {
    constructor() {
        this.members = [];
    }

    static from(iterable) {
        let group = new Group();
        for (const val of iterable) {
            group.add(val);
        }
        return group;
    }

    has(val) {
        return this.members.includes(val);
    }

    add(val) {
        if (!this.has(val)) {
            this.members.push(val);
        }
    }

    delete(val) {
        if (this.has(val)) {
            this.members = this.members.filter(item => item !== val);
        }
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.i = 0;
    }

    next() {
        if (this.i === this.group.members.length) {
            return { done: true };
        }

        let value = this.group.members[this.i];
        this.i++;
        return {
            value,
            done: false
        };
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c