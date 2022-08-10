const reverseString = function (str) {
    const l = str.length;
    let strRev = '';
    for (let i = l - 1; i >= 0; i--) {
        strRev += str[i];
    }
    return strRev

};

// Do not edit below this line
module.exports = reverseString;
