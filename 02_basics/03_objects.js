


// objects literal
const jsUser = {
    name: "uday",
    age: 26,
    emailId: "uday@kodnest.com",
    isLoggedIn: false,
    location: "Mumbai",
    lastLogInDay: ["moday", "saturday"],
    mySym: "myKey1"
}

// console.log(jsUser.emailId)
// console.log(jsUser["emailId"]);
// console.log(jsUser.mySym);

jsUser.emailId = "uday@google.com"
//Object.freeze(jsUser)
console.log(jsUser)

jsUser.greetings = function () {
    console.log("Hello uday");
}
console.log(jsUser.greetings());
