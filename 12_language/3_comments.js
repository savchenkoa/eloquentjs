// Comments
// This is the old skipSpace. Modify it...
function skipSpace(string) {
  console.log(`\n\n`); 
  console.log(`inp str:\n${string}`);
  
  let match = string.match(/(\s|#.*\n)*/);
  if (match === null) return "";
  
  console.log(`match:[${match[0]}]`);
  console.log(`result: [${string.slice(match[0].length)}]`);
  console.log(`\n\n`); 
 
  return string.slice(match[0].length);
}

console.log(parse("# hello\nx"));
// → {type: "word", name: "x"}

console.log(`\n\n!!!2\n\n`);

console.log(parse("a # one\n   # two\n()"));
// → {type: "apply",
//    operator: {type: "word", name: "a"},
//    args: []}
