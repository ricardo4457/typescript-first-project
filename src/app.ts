// Interfaces with Classes

import { Payment } from "./classes/Payment.js";
import { Invoice } from "./classes/Invoice.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// this Obeys HasFomatter interface
let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('HUGO', 'Beer', 60);
docTwo = new Payment('mario', 'game dev', 900)

// this arrays Obeys HasFomatter interface

let docs: HasFormatter[] = [];

docs.push(docOne);
docs.push(docTwo);

console.log(docs);

//form
const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
  }
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});