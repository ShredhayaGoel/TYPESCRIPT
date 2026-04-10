"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userdata = {
    name: "SHREDHAYA GOEL",
    age: 21,
    comp: "",
    add: {
        name: "GOEL HOUSE",
        city: "DELHI",
    },
};
console.log(userdata);
var user = {
    name: "SHREDHAYA GOEL",
    age: 21,
    comp: "",
};
user.name = "SHREDHAYA GOEL";
user.age = 21;
user.comp = "MICROSOFT";
user.add = {
    name: "GOEL HOUSE",
    city: "DELHI",
};
console.log(user);
// instanceof typeguard
class product {
}
var p1 = new product();
class order {
}
var o1 = new order();
function checkorder(data) {
    if (data instanceof product) {
        console.log("This is a product");
    }
    else if (data instanceof order) {
        console.log("This is an order");
    }
}
checkorder(p1);
checkorder(o1);
// typeof typeguard
function checkType(data) {
    if (typeof data === "string") {
        console.log("This is a string");
    }
    else {
        console.log("This is a number");
    }
}
checkType("Hello");
checkType(42);
function check(obj) {
    // custom type guard function
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.name === "string" &&
        typeof obj.age === "number");
}
function pass(item) {
    if (check(item)) {
        // also a type guard
        return `user name is ${item.name} and age is ${item.age}`;
    }
    else {
        return `This is not a user object , this is a string : ${item}`;
    }
}
console.log(pass({ name: "SHREDHAYA GOEL", age: 21 }));
console.log(pass("Hello"));
console.log(check({ name: "SHREDHAYA GOEL", age: 21 })); // true
console.log(check("Hello")); // false
//# sourceMappingURL=obj.js.map