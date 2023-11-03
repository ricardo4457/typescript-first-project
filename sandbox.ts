// explicit types

 let pepo : string ;
 let age : number ;
 let isIn : boolean ;

 // array
  pepo = 'ricardo';
  let group : string[]= [];
  group.push(pepo);

  // union types
  
  let mix : (string|number)[]= [];

   mix.push(pepo);
   mix.push(30);
 console.log(mix);

 let uid: string|number;

 uid = 'ssgsdg';
 uid = 45;

 // object 

 let obj : object;

 obj = {
    name:'ricardo', 
    age:29
  };

 let obj2 : {
  name: string,
  numb: number,
 }

  obj2 = {
  name: 'ricardo',
  numb: 12,
 }