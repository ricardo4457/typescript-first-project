// let boas: Function;

// 1
let boas:(a: string , b:string) => void;
boas = (name:string,numID:string) =>{
    console.log(`${name} says ${numID}`);
};
// 2

let calc: ( a: number , b: number , c:string ) => number;


calc: ( numbOne: number , numbTwo: number , action:string ) => { 
    if(action = 'add') {
    return numbOne + numbTwo;
} else {
    return numbOne - numbTwo;
}
}
// 3

let logDetails: ( obj: {name: string , age:number }) => void;

logDetails =(person: {name: string , age: number})=> {

    console.log(`${person.name} is ${person.age} years old`);   
}