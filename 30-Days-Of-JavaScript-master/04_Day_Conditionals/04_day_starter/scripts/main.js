// this is your main.js script

/* alert('Open the browser console whenever you work on JavaScript')
 */
//level 1

/* let yourAge = prompt("Enter your age")

if (yourAge > 18){
    alert("You are old enough to drive")

}else {
    alert(`You are left with ${18 - yourAge} years to drive `)
} */

let a = 4
let b = 3

/* if ( a >b) {
    console.log(`${a} is greater than ${b}`)
} else if(b>a) {
    
    console.log(`${b} is greater than ${a}`)
} else {
    console.log(`${a} is equal to ${b}`)
}


 console.log ((a < b) ? "ternary truthy" : "ternary falsy")
 */

//  console.log((a%2 === 0) ? "its even":"its odd")

// Level 2

let getDaysInMonth = function(month,year) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
   return new Date(year, month, 0).getDate();
};

   console.log(getDaysInMonth(2, 2022));