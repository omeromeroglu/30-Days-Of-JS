/* console.log(countries) */
/* alert('Open the browser console whenever you work on JavaScript')
alert('Open the console and check if the countries has been loaded') */

/* let array6 = [1,2,3,4,5,6,7]
console.log(array6.length)
console.log(array6[0],array6[array6.length-1],array6[(array6.length-1)/2])
 */
/* let mixedDataTypes = [true,false,1,2,"string",0,NaN]
console.log(mixedDataTypes.length)
console.log(mixedDataTypes.join().toUpperCase())

console.log(mixedDataTypes.indexOf(1))
 */

let itCompanies = [1,2,3]

/* function findDoubbleO () {
    let resultArray = []
    itCompanies.forEach(element => {
       if( element.includes("oo")){
           resultArray.push(element)
       }else{
          return
       }

       
    });
    console.log(resultArray)
}

findDoubbleO() */

/* console.log(itCompanies.sort())
console.log(itCompanies.reverse())

console.log(itCompanies.slice(Math.max(itCompanies.length - 3, 0)))
 */
/* 
console.log(itCompanies.pop((itCompanies.length - 1)/2)) */
/* 
console.log(itCompanies.length)


let array = [1,2,3,4,5,6]

console.log(array.length) */

// Level 2
/* import {countries} from "./data/countries.js" */
/* console.log(countries) */

/* let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let words = text.split(" ")
console.log(words)
console.log(words.length) */

/* const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("meat")
shoppingCart.push("sugar")
const index = shoppingCart.indexOf("Honey");
if (index > -1) {
  shoppingCart.splice(index, 1); // 2nd parameter means remove one item only
}
const index2 = shoppingCart.indexOf("Tea");
shoppingCart[index2] = "greenTea" // 2nd parameter means remove one item only

console.log(shoppingCart) */

/* const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
console.log(fullStack) */


// Level 3

/* const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()

console.log(ages[0],ages[ages.length - 1]) */
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
sum = ages.reduce((a, b) => a + b, 0)
console.log(sum)