const repeatString = function (str, num) {
    let st = '';
    if (num == -1) { return "ERROR" }
    else {
        for (let i = 0; i < num; i++) {
            st += str;
        }
        return st
    }


};

// Do not edit below this line
module.exports = repeatString;
