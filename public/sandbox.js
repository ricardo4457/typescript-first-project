"use strict";
let boas;
boas = () => { console.log('testing'); };
console.log(boas());
const add = (n1, n2, n3 = "nada") => { console.log(n3); };
const reduce = (n1, n2, n3) => { console.log(n3); return n1 - n2; };
console.log(add(12, 34, "arroz"));
console.log(reduce(12, 34));
