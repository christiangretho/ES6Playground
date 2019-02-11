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