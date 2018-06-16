// Groups
class Group {
    // Your code here.
    
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
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
