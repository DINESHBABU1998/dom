//Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype
// let parent = {
//     eats: true,
//     moves: true,
//     walk : () => {
//     console.log('I walk')}
// }    
// let child = {
//     jumps: true,
//     carrot: 'yes'
// }
// let child1={
//     sleep: true,
//     speed:'slow'
// }

// child.__proto__= parent; //child inherits properties from parent

// child1.__proto__=child   //prototype chaining

// child1.walk()            //it prints 'I walk'

// child.walk()             //it prints 'I walk'

// console.log(child.eats); //output is true
// console.log(child.hasOwnProperty('carrot')); //true
// console.log(child.hasOwnProperty('moves'));  //false

// console.log(child1.eats); //output is true
// console.log(child1.hasOwnProperty('sleep')); //true
// console.log(child1.hasOwnProperty('moves'));  //false

//Write a JavaScript function to retrieve all the names of object's own and inherited properties.
// for (let key in child) {
//      if (child.hasOwnProperty(key)) {
//          console.log(key, 'OWN')
//      } else {
//          console.log(key, 'INHERITED')
//      }
// }
//jumps OWN
//carrot OWN
//eats INHERITED
//moves INHERITED
//walk INHERITED

//Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays
// let salaries=[1000,2000,3000,4000,5000]
// let res = salaries.reduce((acc,curr)=>{
//     acc+=curr
//     return acc
// },0)
// console.log(res);






