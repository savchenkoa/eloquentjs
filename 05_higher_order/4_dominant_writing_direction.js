function dominantDirection(text) {
    // Your code here.
    let scripts = [];
    for (let i = 0; i < text.length; i++) {
        let script = characterScript(text.codePointAt(i));
        if (script) {
            scripts.push(script);
        }
    }

    let counts = countBy(scripts, script => script.direction);
    let maxCountDirection = counts.reduce((current, count) => current > count ? current : count);
    return maxCountDirection.name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
