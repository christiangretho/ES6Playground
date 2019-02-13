let s = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzz';
 
function printerError(code){
    let stringArray = code.split('');
    let errorArray = stringArray.filter(element => {
      return codeChecker(element) != undefined;
    });
    return errorArray.length + '/' + code.length;
}

function codeChecker(code){
    let badCode = 'nopqrstuvwxyz';
    if (badCode.search(code) > -1){
        return code;
    }
}

var errors = printerError(s);

errors


// regex solution
// function printerError(s) {
//     return s.match(/[^a-m]/g).length + "/" + s.length;
// }

// my favorite solution
// function printerError(s) {
//     // your code
//     var count = 0;
//     for(var i = 0; i < s.length; i++) {
//       if (s[i] > "m") {
//         count++;
//       }
//     }
//     return count+"/"+s.length;
// }
