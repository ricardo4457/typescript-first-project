"use strict";
// const anchor = document.querySelector('a')!;
// // if(anchor){
// // console.log(anchor.href)
// // }
//     console.log(anchor.href)
// // catches the type of html elements
// const form = document.querySelector('form')!;
// How to access different html elements
// Tells the specific element type
const form = document.querySelector(".new-item-form");
// console.log(form.children);
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
