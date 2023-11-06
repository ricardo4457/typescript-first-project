export class Payment {
    // props are all public by default
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} details of payment: ${this.details} values this:${this.amount}`;
    }
}
