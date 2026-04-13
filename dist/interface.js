"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makechai(order) {
    console.log(order);
}
function servechai(order) {
    console.log(order);
}
class masalachai {
    // class
    water = 100;
    milk = 100;
    masalachai1() {
        console.log("masala chai is ready");
        console.log(this.water);
        console.log(this.milk);
    }
}
const chai1 = new masalachai();
chai1.masalachai1();
class cup {
    size = "large";
}
const chai2 = {
    tealeaves: 100,
    masala: 50,
};
const user1 = {
    username: "Shredhaya Goel",
};
const user2 = {
    username: "Shredhaya Goel",
    password: "secret",
};
const cfg = {
    appName: "ChaiApp",
    version: 1.0,
};
// cfg.appName = "NewChaiApp"; // Error: Cannot assign to 'appName' because it is a read-only property.
//# sourceMappingURL=interface.js.map