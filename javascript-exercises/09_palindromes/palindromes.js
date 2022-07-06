const palindromes = function (str) {
    revStr = '';
    modStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() != str[i].toUpperCase()) {
            modStr += str[i].toLowerCase();
        }
    }
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i].toLowerCase() != str[i].toUpperCase()) {
            revStr += str[i].toLowerCase();
        }
    }
    return (modStr === revStr);


};

// Do not edit below this line
module.exports = palindromes;
