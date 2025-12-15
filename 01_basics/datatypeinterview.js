console.log("Hello welcome");
//primitive (call by value)
// 7 types : string,number,boolean,null,undefined,symbol,BigInt
const score =100
const scorevalue=100.3

const isloggedin=false
const outsidetemp=null//empty
let useremail;//undefined

const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id === anotherid);
const bignumber =8584948248755984587585n
// add n to the last digit and it becomes bigint

//Reference (non primitive) directly located into the memory 

//Array,Objects,Functions

//these are as usual arrays which was separated with comma
const heros =["iron man","raju","chota bhemm"]
//these are called objects
let myobj={
    name: "ravi",
    age: 23
}
//function decalaration with variable
 const myfunction=function(){
    console.log("Hello world");
    
 }

 console.log(typeof anotherid);
 
 // MEMORY TYPES
// stack(primitive),heap(non primitive)

let userone ={
    email:"user@goggle.com",
    upi:"user@ybl"
}
let usertwo=userone
usertwo.email="anjum@goggle.com"
console.log(userone.email);
console.log(usertwo.email);


