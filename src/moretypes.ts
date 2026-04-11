let response: any = "42";
let numericlength: number = response.length; // This will cause a type error because 'response' is of type 'any' and does not have a 'length' property.
console.log(numericlength);

let num: any = 4547468;
let num1: number = String(num).length; // This will cause a type error because 'num' is of type 'any' and does not have a 'Length' property.
console.log(num1);
type book = {
  name: string;
};
let bookstring = '{"name" : who moves my cheese}';
let bookobject: book = JSON.parse(bookstring) as book;
console.log(bookobject.name);
