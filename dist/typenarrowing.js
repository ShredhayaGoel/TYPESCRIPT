"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getchai(kind) {
    if (typeof kind === "string") {
        console.log(`Making a cup of ${kind} chai`);
    }
    if (typeof kind === "number") {
        console.log(`total no of chai is ${kind}`);
    }
}
getchai("masala");
getchai(2);
function message(msg) {
    // function message(msg?: string  | null) { both correct as undefined is already included in optional parameter }
    // ?  by adding optional parameter it is optional to pass the argument and it can be undefined by default if not passed
    if (msg) {
        console.log(`message is ${msg}`);
    }
    else {
        console.log("no message");
    }
}
message("hello");
message();
message(null);
message(undefined);
function getLength(obj) {
    if (typeof obj === "string") {
        console.log(`length of string is ${obj.length}`);
    }
    else {
        console.log(`length of array is ${obj.length}`);
    }
}
getLength("hello");
getLength(["a", "b", "c"]);
function orderchai(size) {
    if (size === "small") {
        return `small cutting chai ....`;
    }
    if (size === "medium") {
        return `medium chai ..... `;
    }
    if (size === "large") {
        return `large chai ... `;
    }
    return `chai ordered is ${size}`;
    // console.log(`chai ordered is ${size}`);
}
orderchai("small");
orderchai("medium");
orderchai("large");
class kulhadchai {
    serve() {
        return "serving kulhad chai";
    }
}
const kulhad = new kulhadchai();
console.log(kulhad.serve());
class cuttingchai {
    serve() {
        return "serving cutting chai";
    }
}
const cutting = new cuttingchai();
console.log(cutting.serve());
function serve(chai) {
    if (chai instanceof kulhadchai) {
        return chai.serve();
    }
    if (chai instanceof cuttingchai) {
        return chai.serve();
    }
}
serve(kulhad);
serve(cutting);
console.log(serve(kulhad));
console.log(serve(cutting));
class cuttingchai1 {
    sugar;
    temperature;
    constructor(sugar, temperature) {
        this.sugar = sugar;
        this.temperature = temperature;
    }
    serve() {
        return `serving cutting chai with ${this.sugar} sugar at ${this.temperature}`;
    }
}
class kulhadchai1 {
    sugar;
    temperature;
    constructor(sugar, temperature) {
        this.sugar = sugar;
        this.temperature = temperature;
    }
    serve() {
        return `serving kulhad chai with ${this.sugar} sugar at ${this.temperature}`;
    }
}
const cutting1 = new cuttingchai1(2, "hot");
const kulhad1 = new kulhadchai1(3, "warm");
function servechai(chai) {
    return chai.serve();
}
// constructor is taking aarguments and creating objects  and i dont use instanceof because both classes have same method serve and it is not necessary to check the type of object as
//   both will return the same type of string message so we can directly call the serve method without checking the type of object
console.log(servechai(cutting1));
console.log(servechai(kulhad1));        //# sourceMappingURL=typenarrowing.js.map