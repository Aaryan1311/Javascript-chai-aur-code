const score = 400
console.log(score) // print 400 ; // this is a number(detected by js)

const balance = new Number(100) // we are declearing this as a number 

/*

Some methods in numbers in js

a) x.toString() -- this will change number 'x' to string and we can use all other properties of string

b) x.toFixed(y) --- this will fix the value of x to some y decimal places


c) x.toPrecision --- 
this will return a string!!
take value upto 21 only
this will pricise the value upto a given number, example 1.2365.toPrecision(3) gives 1.24


d) x.toLocaleString -- put commas according to us standards to increase readabity of number

adding attribute 'en-IN' will add commas accoring to Indian standard

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


Math

.abs()
.round() -- round off in Integer

.ceil() -- 4.2 == 5

.floor() -- 4.2 == 4

.min() -- min in array

.max() -- max in array

.random() -- give values from 0 to 1

if we want values in some range, eg. 10 to 20 then we can use following formula

console.log(Math.floor(Math.random() * (max-min+1)) + min)





*/