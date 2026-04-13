"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ischaiorder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function serveorder(item) {
    if (ischaiorder(item)) {
        return `serving ${item.type} chai with ${item.sugar} sugar`;
    }
    return `serving custom chai :  ${item}`;
}
//# sourceMappingURL=typenarrowing2.js.map