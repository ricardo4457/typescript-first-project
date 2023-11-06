 
 import {HasFormatter} from '../interfaces/HasFormatter.js';
 export class Payment  implements HasFormatter {
    // props are all public by default
    // readonly client: string;
    // private details: string;
    // public amount: number;
  
    constructor(
      readonly recipient: string,
      private details: string,
      public amount: number,
      ) {}
    format() {
      return `${this.recipient} details of payment: ${this.details} values this:${this.amount}`;
    }
  }
