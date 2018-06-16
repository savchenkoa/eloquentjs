// Fixing scope
specialForms.set = (args, scope) => {
  // Your code here.  
  if (args.length !== 2) {
    throw new SyntaxError("Set needs 2 arguments.");
  }
  let varName = args[0].name;
  let varVal = args[1].name;
  let value = scope[varVal];
  
  let parentScope = Object.getPrototypeOf(scope);
  while (parentScope) {
    if (Object.hasOwnProperty.call(parentScope, varName)) {
      break;
    } else {
      parentScope = Object.getPrototypeOf(parentScope);
    }
  }
 
  //console.log('parentScope = ', parentScope);
  if (!parentScope) {
    throw new ReferenceError(`Variable ${varName} is not defined`);
  } else {
    parentScope[varName] = value;
  }
};

run(`
do(define(x, 4),
   define(setx, fun(val, set(x, val))),
   setx(50),
   print(x))
`);
// → 50
run(`set(quux, true)`);
// → Some kind of ReferenceError