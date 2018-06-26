'use strict';
let dogOne = [];
let dogTwo = [];

let catOne = [];
let catTwo = [];



enqueue(animal) = () => {
    if (animal === cat || dog){
        return err;
    }
    if (animal === dog) {
        while (!dogOne === null){
            dogTwo.push(dogOne);
        }
        dogOne.push(animal)
        dogOne.push(dogTwo);
        return dogOne;
    }
    if (animal === cat) {
        while (!catOne === null){
            catTwo.push(catOne);
        }
        catOne.push(animal)
        catOne.push(catTwo);
        return catOne;
    }
}

dequeue(pref) = () => {
    if (pref === dog) {
        if (dog1 === null){
            return err;
        }
        return dogOne.pop()
    }
   if (pref === cat) {
    if (catOne === null){
        return err;
    }
    catOne.pop()
    return catOne;
    }
    if (pref !== dog || cat) {
        if (dogOne || cat === null){
            return err;
        }
        if (dogOne.length > catOne.length){
            return dogOne.pop()
        }
        if (catOne.length > dogOne.length){
            return catOne.pop()
        }
   }
}