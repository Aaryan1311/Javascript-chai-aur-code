const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");  don't use this to concatenation of strings. Instead

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // use this way!!

// Output will be
//Hello my name is Hitesh and my repo count is 50.

const gameName = new String('hitesh-hc-com')
 // Making string object

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) // this will give hite!! gives output 0 to 3 not includes end digit.
console.log(newString);

const anotherString = gameName.slice(-8, 4) // negative number means it will start counting from end then go towards start, -8 means making substring from 8th index from end to 4 index from first

console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) // returns true or false

console.log(gameName.split('-')); // split whole string and return an array




// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String 

//refer this article