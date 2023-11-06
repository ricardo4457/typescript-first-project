
//Define a class
class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }
  format() {
    return `${this.client}:${this.details} values this:${this.amount}`;
  }
}
// new invoices in a array 
const invOne = new Invoice('ricardo', 'Hospital', 40);
const invTwo = new Invoice('joão', 'Apresentar', 2);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
// reassign new values to existing invoices
invOne.client='nuno';
invTwo.client='alex';
console.log(invOne , invTwo);
//form
const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
