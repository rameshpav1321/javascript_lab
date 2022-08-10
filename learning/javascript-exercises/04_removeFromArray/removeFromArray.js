const removeFromArray = function (arr) {
    let modifiedArray = [];
    //console.log(l, typeof l);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arguments[1]
            && arr[i] !== arguments[2]
            && arr[i] !== arguments[3]
            && arr[i] !== arguments[4]) { modifiedArray.push(arr[i]) }
    }
    // console.log(modifiedArray);
    return modifiedArray

};

// Do not edit below this line
module.exports = removeFromArray;
