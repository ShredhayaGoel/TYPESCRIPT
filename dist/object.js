"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = {
    name: "masala chai",
    price: 20,
    ishot: true,
};
let tea;
tea = {
    name: "masala chai",
    price: 25,
    ishot: true,
};
const adrakchai = {
    name: "adrak chai",
    price: 25,
    ingredients: ["ginger", "tea leaves"],
};
let snallccup = { size: "200ml" };
let bigcup = {
    size: "500ml",
    material: "steel",
};
snallccup = bigcup;
const coffee = {
    brewtime: 5,
    beans: "arabica",
};
const chaibrew = coffee;
const u = {
    username: "chai aur code",
    pasword: "1234679",
};
const chai1 = (updated) => {
    console.log("updating chai with", updated);
};
chai1({ price: 30 });
chai1({ name: "adrak chai" });
const placeOrder = (order) => {
    console.log("placing order for", order);
};
placeOrder({ name: "masala chai", quantity: 2 }); // requires all property
// only name and price will be there in basicchaiinfo
const chaiinfo = {
    name: "masala chai",
    price: 20,
    // ishot: true, // error because ishot is not part of basicchaiinfo
    // ingredients: ["tea leaves", "milk"], // error because ingredients is not part of basicchaiinfo
};
console.log(chaiinfo);
const publicinfo = {
    name: "masala chai",
    price: 20,
    ishot: true,
    // secretingredients: ["tea leaves", "milk"], // error because secretingredients is not part of publicchaiinfo
};
console.log(publicinfo);
//# sourceMappingURL=object.js.map