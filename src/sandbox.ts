let boas: Function;

boas = () => { console.log('testing') };

console.log(boas());

const add = (n1: number, n2: number , n3: number | string = "nada" ) : void => {console.log(n3);}

const reduce = (n1: number, n2: number , n3?: number ) : number => {console.log(n3); return n1 - n2 }

console.log(add(12, 34 , "arroz"));

console.log(reduce(12, 34));