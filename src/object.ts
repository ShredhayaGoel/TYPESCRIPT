const chai = {
  name: "masala chai",
  price: 20,
  ishot: true,
};

let tea: {
  name: string;
  price: number;
  ishot: boolean;
};
tea = {
  name: "masala chai",
  price: 25,
  ishot: true,
};

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakchai: Tea = {
  name: "adrak chai",
  price: 25,
  ingredients: ["ginger", "tea leaves"],
};

type cup = {
  size: string;
};
let snallccup: cup = { size: "200ml" };

let bigcup = {
  size: "500ml",
  material: "steel",
};
snallccup = bigcup;
type brew = {
  brewtime: number;
};
const coffee = {
  brewtime: 5,
  beans: "arabica",
};
const chaibrew: brew = coffee;
// here chaibrew is of type brew and its value
// is coffee which has more properties than brew but it is still valid because
//  of property satisfaction of brew atleast uski honi chayie chahe baad me add on krdo in TypeScript.
// or is callled structural typing in TypeScript. It is a powerful feature
//  that allows for flexibility in assigning values to variables of different types as long as they satisfy the required properties.
type user = {
  username: string;
  pasword: string;
};
const u: user = {
  username: "chai aur code",
  pasword: "1234679",
};

type item = {
  name: string;
  quantity: number;
};
type address = {
  street: string;
  pin: number;
};
type order = {
  id: string;
  items: item[]; // also a datatype defined by us type item
  address: address; // also a datatype defined by us type address
};
type chai = {
  name: string;
  price: number;
  ishot: boolean;
};
const chai1 = (updated: Partial<chai>) => {
  console.log("updating chai with", updated);
};

chai1({ price: 30 });
chai1({ name: "adrak chai" });

type chai2 = {
  name?: string;
  quantity?: number;
};

const placeOrder = (order: Required<chai2>) => {
  console.log("placing order for", order);
};
placeOrder({ name: "masala chai", quantity: 2 }); // requires all property

type chai3 = {
  name: string;
  price: number;
  ishot: boolean;
  ingredients: string[];
};

type basicchaiinfo = Pick<chai3, "name" | "price">;

// only name and price will be there in basicchaiinfo

const chaiinfo: basicchaiinfo = {
  name: "masala chai",
  price: 20,

  // ishot: true, // error because ishot is not part of basicchaiinfo
  // ingredients: ["tea leaves", "milk"], // error because ingredients is not part of basicchaiinfo
};
console.log(chaiinfo);

type newchai = {
  name: string;
  price: number;
  ishot: boolean;
  secretingredients: string[];
};
type publicchaiinfo = Omit<newchai, "secretingredients">;

const publicinfo: publicchaiinfo = {
  name: "masala chai",
  price: 20,
  ishot: true,
  // secretingredients: ["tea leaves", "milk"], // error because secretingredients is not part of publicchaiinfo
};
console.log(publicinfo);
