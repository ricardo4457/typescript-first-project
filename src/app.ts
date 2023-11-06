
//Modifiers
class Invoice {
  // props are all public by default
  // readonly client: string;
  // private details: string;
  // public amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
    ) {}
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

invoices.forEach(inv => { console.log(inv.client, inv.amount, inv.format); });

//form
const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  // console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
