// console.log(countries)
// alert('Open the console and check if the countries has been loaded')


/* for(let x = 0 ;x <= 10; x++){
    arr.push(x)
    
} */
let i = 0

/* do{
    i++
    console.log(i)
}while( i < 10) {
    
    
} */

/* function iterate(num){
    for(i ; i<= num ; i++){

        arr.push("#")
        newarr = arr.join("")
        console.log(newarr)
    }
}

iterate(9) */
/* let sum = 0
for(let i = 0 ;i <= 100; i++){
    sum += i
}
console.log(sum) */

/* let arr = []

for(let i = 0 ;i < 5; i++){
    arr.push(Math.floor(Math.random()*100))

}
let arr2 = new Set(arr)
console.log(arr2) */

//Level 2

function calculateDaysBetweenDates(begin, end) {
    let beginDate = new Date(begin)
    let endDate = new Date(end)
    let days = Math.abs(beginDate - endDate) / (1000 * 60 * 60 * 24)
    return days
}

//Write a script which generates a random hexadecimal number.
/* function randomhex() {
    let hex = Math.floor(Math.random() * 16777215).toString(16)
    console.log(hex)
}

randomhex() */

/* // Write a script which generates a random rgb color number.
function randomRgb() {
    let rgb = Math.floor(Math.random() * 255)
    let rgb2 = Math.floor(Math.random() * 255)
    let rgb3 = Math.floor(Math.random() * 255)
    console.log(rgb, rgb2, rgb3)
}

randomRgb() */

/* let countries2 = ['Albania', 'Bolivia','Ethiopia',"Turkey"]

function countriesContainIa() {
    let result = []
    countries2.forEach(element => {
        if(element.includes("ia")){
            result.push(element)
        }
    });
    console.log(result)
}

countriesContainIa() */

let fruit= ['banana', 'orange', 'mango', 'lemon']

function reverseFruit(){
    let result = []
    fruit.forEach(element => {
        result.unshift(element)
    });
    console.log(result)
}

reverseFruit()

/* console.log(countries)

function extractLand(countries){
    let result = []
    
    countries.forEach(element => {
        if(element.includes("land")){
            result.push(element)
        }

    });
    
    let result2 = countries.filter(x => !result.includes(x));
    console.log(result2)
}
extractLand(countries) */