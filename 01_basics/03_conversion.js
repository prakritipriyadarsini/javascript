let score = "abc4"

console.log(typeof score);  // string

let valueInNumber = Number(score)
console.log(typeof valueInNumber); // number
console.log(valueInNumber); //NAN


// "33" => 33
//"abc4" => NAN
// ture => 1
//false => 0
//null => 0
//undefine => NAN

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);               //true

// 1 => true 
// 0 => false 
// "" => false 
// "kriti" => true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);            //33
console.log(typeof stringNumber);    //string

