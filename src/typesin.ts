let drinkt = "chai";
drinkt = "56";
let cups = Math.random() > 0.5 ? 10 : 5;
let channelname = "chai aur code";
channelname = "261";

// UNION TYPES IN TYPESCRIPT

let subs: number | string = "10M";

let apiRequest: "pending" | "success" | "error" = "pending";
apiRequest = "success"; // valid
// apiRequest = 'done'; //invalid
console.log(apiRequest);
let airlinesSeat: "window" | "aisle" | "middle" = "window";
airlinesSeat = "middle";

let orders = ["12", "20", "30"];

let currentorder: string | undefined;

for (let order of orders) {
  if (order == "20") {
    currentorder = order;
    break;
  }
}
console.log(currentorder);
