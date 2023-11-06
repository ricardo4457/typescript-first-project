export class Invoice {
    // props are all public by default
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client}:${this.details} values this:${this.amount}`;
    }
}
