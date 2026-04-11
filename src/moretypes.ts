let response: any = "42";
let numericlength: number = response.length;
console.log(numericlength);

let num: any = 4547468;
let num1: number = String(num).length;
console.log(num1);
type book = {
  name: string;
};
let bookstring = '{"name" : "who moves my cheese"}';
let bookobject: book = JSON.parse(bookstring) as book;
console.log(bookobject);

// const element = document.getElementById("myElement") as HTMLInputElement;

// ANY AND UNKNOWN

let value: any = "Hello, World!";
value = [1, 2, 3, 4, 5];
console.log(value);
value = { name: "John", age: 30 };
console.log(value);
// console.log(value.toUpperCase());

let newvalue: unknown = "Hello, World!";
newvalue = [1, 2, 3, 4, 5];
console.log(newvalue);
newvalue = { name: "John", age: 30 };
console.log(newvalue);
newvalue = "Hello, World!";

if (typeof newvalue === "string") {
  console.log(newvalue.toUpperCase());
}

const data: unknown = "chai aur code";
if (typeof data === "string") {
  console.log(data.toUpperCase());
}
const strdata: string = data as string;
console.log(strdata.toUpperCase());

// try - catch
try {
  let user1: any = "Shredhaya Goel";
  // user1 = 123;
  user1.toUpperCase();
  console.log(user1);
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message); // short msg about error
    console.log(error.name); // Type of error (TypeError, ReferenceError)
    console.log(error.stack); // full trace of error
  }
  console.log("Error");
}

// Never type

type role = "admin" | "editor" | "viewer" | "guest";
function redirect(userrole: role): void {
  if (userrole === "guest") {
    console.log("Redirecting to guest dashboard");
    return;
  }
  if (userrole === "editor") {
    console.log("Redirecting to editor dashboard");
    return;
  }
  if (userrole === "viewer") {
    console.log("Redirecting to viewer dashboard");
    return;
  }
  userrole; // guest
  console.log(redirect("admin"));
  console.log(redirect("editor"));
  console.log(redirect("viewer"));
  console.log(redirect("guest"));
}

function nreturn(): never {
  while (true) {
    console.log("This function never returns");
  }
}
