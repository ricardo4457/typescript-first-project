// Interfaces
// helps define the structure of objects
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
};

const quim: IsPerson = {
  name: 'Quim', age: 88, speak(phrase: string): void {
    console.log('boas')
  },
  spend(amount: number): number {
    console.log(amount)
    return amount;
  }
};

const greetPerson = (person:IsPerson) => {
  console.log('greetings ' + person.name)
};

greetPerson(quim);
