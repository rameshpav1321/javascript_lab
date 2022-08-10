let userName = prompt("enter user name: ");
if (userName == "Admin") {
    let pwd = prompt("enter password: ");
    if (pwd == "TheMaster") {
        alert("welcome");
    }
    else if (pwd == '' || pwd == null) {
        alert("Cancelled");
    }
    else {
        alert("wrong password");
    }
}
else if (userName == '' || userName == null) {
    alert("Cancelled");
}
else {
    alert("i don't know you");
}