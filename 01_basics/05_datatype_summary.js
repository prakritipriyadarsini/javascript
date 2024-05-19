// 2types of datatype in js
  // 1. primitive
     // primitive datatype is 7types:
        // String , Number , Boolean , BigInt , Null , Undefined and Symbol 

// JS is a dynamically type language . its means that js does not requir the explicit declaration of the variable before they're used.


const score = 100
const scoreValue =100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log( id === anotherId );  //false

const bigNumber = 3456543576654356754n


// 2.non-primitive ( Reference ):
// Array , Objects , Functions

const heros = ["shaktiman", " naagraj", " doga "];  //Array

     
    
    let myObject = {
        firstName: "kriti",
        lastName: "swain",
        age: 20
    };                                 //Object

    
    const myFunction = function() {
        console.log("hello world");
        
    }                               // Function


console.log( typeof bigNumber);  // bigint
console.log(typeof myFunction);  //Function
console.log(typeof myObject);    //Object
