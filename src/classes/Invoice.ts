 export class Invoice {
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
