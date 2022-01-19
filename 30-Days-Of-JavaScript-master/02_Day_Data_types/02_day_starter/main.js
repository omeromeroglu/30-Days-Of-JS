// this is your main.js script

let challenge  = "30 Days Of JavaScript"

console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLocaleLowerCase())
console.log(challenge.substring(0,3))
console.log(challenge.slice(11))
console.log(challenge.includes("Script"))
array1='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(array1.split(","))
let change = "30 Days Of JavaScript"
console.log(change.replace("JavaScript", "Python"))
console.log(change.charAt(15))
console.log(change.charCodeAt(12))
console.log(change.indexOf("Of"))
console.log(change.lastIndexOf("JavaScript"))
let sentence = " You cannot end a sentence with because because because is a conjunction"
console.log(sentence.indexOf("because"))
console.log(sentence.lastIndexOf("because"))
console.log(sentence.search("because"))
console.log(sentence.trim())
console.log(sentence.startsWith(" "))
console.log(sentence.match("because"))
console.log(sentence.concat(sentence,challenge))
console.log(sentence.repeat(2))

exercise2= "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."

console.log(exercise2)

exercise3 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log(exercise3)

let ten = 10
console.log(
   typeof( typeof(ten === 10) )
)

console.log(Math.ceil(parseFloat('9.8')) ===10 )

let jargon = "jargon"
let pyhton = "pyhton"
console.log(jargon.includes("on") & pyhton.includes("on"))
console.log(Math.floor(Math.random()*101))

function getRandomInt(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  console.log(getRandomInt())

  let js = "JavaScript"

  console.log (
     
      js[`${getRandomInt(0,js.length)}`]
  )

  console.log ("1 \ 1 \n1")

  console.log(sentence.substring(sentence.indexOf("because")))

//Level 3

str = "Love is the best thing in this world. Some found their love and some are still looking for their love."

console.log(str.match("love"))
let string = 'love'
let pattern = /love/gi
console.log(string.match(pattern))