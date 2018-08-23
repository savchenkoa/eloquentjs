const {readFileSync, statSync, readdirSync} = require('fs');

function myGrep(regexp, result, path, ...files) {
  console.log('myGrep(', result, files, ')');

  for (fileName of files) {
    let fullFileName = path + fileName;
    console.log(' fullFileName  = ',  fullFileName );

    let stat = statSync(fullFileName);
    if (stat.isDirectory()) {
        let dirContent = readdirSync(fullFileName);
        let newPath = fullFileName + '/';
        myGrep(regexp, result, newPath, ...dirContent);
    } else {
      let fileContent = readFileSync(fileName, 'utf-8');
      if (regexp.test(fileContent)) {
        result.push(path + fileName);
      }
    }
  }
  return result;
}

let regexpStr = process.argv[2];
let regexp = new RegExp(regexpStr);
let files = process.argv.slice(3);
let matchedFileNames = myGrep(regexp, [], '', ...files);
console.log('result: \n', matchedFileNames.join('\n '))
