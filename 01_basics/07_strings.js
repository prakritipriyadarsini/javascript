const name = "kriti"
const repoCount = 30

console.log( name + repoCount +"value"); // kriti30value
         //this method is not beter for us ( its oldmethod).

     //    `` - this is called backtick
     // use to concatenate (...................... ${..}............${}............)

     console.log( ` Hello my name is ${name} and my repo count is ${ repoCount}`);
     // Hello my name is kriti and my repo count is 30


const gameName = new String ( 'prakriti priyadarsini swain')

console.log( gameName[0]);             // p
console.log( gameName.__proto__);      //  {}


console.log( gameName.length);         // 27   ( String length)
//The length property returns the length of a string:

/*
A string is converted to upper case with toUpperCase():

A string is converted to lower case with toLowerCase():

*/

console.log( gameName.toUpperCase());   // PRAKRITI PRIYADARSINI SWAIN ( String toUpperCase() )
console.log( gameName.toLowerCase());   // prakriti priyadarsini swain  ( String toLowerCase())

/* text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe */

console.log( gameName.split(" "));         // [ 'prakriti', 'priyadarsini','swain']

// The trim() method removes whitespace from both sides of a string:






//-------------------in js using css use '%c' -----------------------

// console.log("%c hello world " , " color: blue,font-size:40px");
// console.log("%cHello, World", "color: blue; font-size: 40px");

// ------------------------------------------------------------




