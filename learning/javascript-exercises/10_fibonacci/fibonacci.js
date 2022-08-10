const fibonacci = function (n) {
    let a = 0, b = 1, c = 0;
    if (n < 0) { return 'OOPS'; }
    else if (n == 0 || n == 1) { return Number(n); }
    for (let i = 2; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return a + b;
};

// Do not edit below this line
module.exports = fibonacci;
