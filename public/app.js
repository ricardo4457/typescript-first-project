"use strict";
;
const quim = {
    name: 'Quim', age: 88, speak(phrase) {
        console.log('boas');
    },
    spend(amount) {
        console.log(amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('greetings ' + person.name);
};
greetPerson(quim);
