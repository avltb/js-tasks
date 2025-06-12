const verifyLogin = function(inputLogin, inputPassword) {
    if (inputLogin === "Login" && inputPassword === 1234){
        return "you're logged in"
    } else if (inputLogin !== "Login" && inputPassword !== 1234) {
        return "both inputs are wrong"
    } else if (inputLogin !== "Login") {
        return "your login is wrong"
    } else {
        return "your password is wrong"
    }       
}

console.log(verifyLogin("Login", 1234));
console.log(verifyLogin("Password", 5678));
console.log(verifyLogin("Password", 1234));
console.log(verifyLogin("Login", 5678));
