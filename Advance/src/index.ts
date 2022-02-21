//import { Hero } from './classes/hero'
//import { Hero as Superhero } from './classes/hero'
//import * as HeroClasses from './classes/hero'
//import { powers } from './data/powers'
// import { HeroI } from './interfaces/hero';
// import { VillanI } from './interfaces/villan';
import { VillanI, HeroI } from './interfaces';
import { printObject, genericFunction, genericFunctionArrow } from './generics/generics';
//const Hero = 123;
// const ironman = new Hero('Ironman',1,40);
// console.log(ironman);
// //console.log( powers);
// console.log(ironman.power)


// printObject("pedrot");
// printObject(new Date());
// printObject(123);
// printObject([1,2,3,4,5]);

// console.log(genericFunctionArrow(3.1412).toFixed(2));
// console.log(genericFunction("holasss").toUpperCase());
// console.log(genericFunction(new Date()).getDate());

const deadpool = {
  name: 'DeadPool',
  realName: 'Wade Winston Wilson',
  dangerLevel: 130,
}

console.log( genericFunctionArrow<VillanI>(deadpool).dangerLevel )