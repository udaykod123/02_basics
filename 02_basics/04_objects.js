const tinderUser = {}

tinderUser.id = "123abs"
tinderUser.name =  "uday"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email : "uday@kodnest.com",
    fullName :{
        userFullName :{
        
             firstName : "uday",
             lastName : "mishra" 
        } 
    }
}
// console.log(regularUser.fullName.email);

// const myObj1 = {1:"a", 2: "b"};
// const myObj2 = {3:"c", 4: "d"};
// const myObj3 = {5:"e", 6: "f"};
// const obj4 = Object.assign({}, myObj1, myObj2, myObj3);
// console.log(obj4);

// user[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(object.values(tinderUser));
// console.log(object.enteries(tinderUser));
const course = {
    courseName : "Java",
    corsePrice : 99,
    courseInstructor : "Uday"
}
const {courseInstructor} = course
console.log(courseInstructor);

