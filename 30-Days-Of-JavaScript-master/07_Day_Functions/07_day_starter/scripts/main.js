// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

/* function fullname (){
    let firstName = "John"
    let lastName = "Doe"
    let fullName = firstName + " " + lastName
    console.log(fullName)
} */

/* function fullName (firstName, lastName){
    let fullName = firstName + " " + lastName
    console.log(fullName)
}

fullName("omer","omeroglu") */

/* function addTwoNumbers (num1, num2){
    let sum = num1 + num2
    console.log(sum)
} */

/* function areaOfRectangle (length, width){
    let area = length * width
    console.log(area)
} */

/* function perimeterOfRectangle (length, width){
    let perimeter = (length + width) * 2
    console.log(perimeter)
} */

/* function volumeOfRectPrism (length, width, height){
    let volume = length * width * height
    console.log(volume)
} */

/* function areaOfCircle (radius){
    let area = Math.PI * radius * radius
    console.log(area)
} */

/* function subsDensity (mass, volume){
    let density = mass / volume
    console.log(density)
} */

/* function convertCelciusToFahrenheit (celcius){
    let fahrenheit = celcius * 9 / 5 + 32
    console.log(fahrenheit)
}

convertCelciusToFahrenheit(25) */

/* function checkSeason (month){
    let season
    if(month === 1 || month === 2 || month === 12){
        season = "Winter"
    }else if(month === 3 || month === 4 || month === 5){
        season = "Spring"
    }else if(month === 6 || month === 7 || month === 8){
        season = "Summer"
    }else if(month === 9 || month === 10 || month === 11){
        season = "Autumn"
    }else{
        season = "Invalid Month"
    }
    console.log(season)
} */

/* function findMax(num1, num2, num3){
    let max = Math.max(num1, num2, num3)
    console.log(max)
}
 */
/* 
function solveLinearEquation (a, b, c){
    let x
    let delta = Math.pow(b,2) - 4 * a * c
    if(delta < 0){
        x = "No Solution"
    }else if(delta === 0){
        x = -b / (2 * a)
    }else{
        x = (-b - Math.sqrt(delta)) / (2 * a)
    }
    console.log(x)
}

function solveQuadEquation (a, b, c, d){
    let x1
    let x2
    let delta = Math.pow(b,2) - 4 * a * c
    if(delta < 0){
        x1 = "No Solution"
        x2 = "No Solution"
    }else if(delta === 0){
        x1 = -b / (2 * a)
        x2 = x1
    }else{
        x1 = (-b - Math.sqrt(delta)) / (2 * a)
        x2 = (-b + Math.sqrt(delta)) / (2 * a)
    }
    console.log(x1)
    console.log(x2)
} */

/* function printArray (array){
    array.forEach(element => {
        console.log(element)
    });
} */

/* function showDateTime (){
   
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    console.log(`${hours}:${minutes}:${seconds} ${day}/${month + 1}/${year}`)
}

showDateTime() */

/* function swapValues (a, b){
    let temp = a
    a = b
    b = temp
    console.log(a)
    console.log(b)
}
 */


/* function reverseArray (array){
    let reversedArray = []
    for(let i = array.length - 1; i >= 0; i--){
        reversedArray.push(array[i])
    }
    console.log(reversedArray)
} */

/* function addItemToArray (array, item){
    array.push(item)
    console.log(array)
} */
/* 
function sumOfEven  (a){
    let sum = 0
    for(let i = 0; i <= a; i++){
        if(i % 2 === 0){
            sum += i
        }
    }
    console.log(sum) */


  /*   function sumOfArg() {
        let sum = 0
        for(let i = 0; i < arguments.length; i++){
            sum += arguments[i]
        }
        console.log(sum)
    }

    sumOfArg(1,2,3,4,5,6,7,8,9,10) */

   /*  function randomUserIp (){
        let ip = []
        for(let i = 0; i < 4; i++){
            ip.push(Math.floor(Math.random() * 255))
        }
        console.log(ip)
    }

    randomUserIp() */

   /*  function shuffleArray (arr) {
        arr.forEach(element => {
            let randomIndex = Math.floor(Math.random() * arr.length)
            let temp = arr[randomIndex]
            arr[randomIndex] = element
            element += temp
            console.log(temp)
        })
    }

    shuffleArray([1,2,3,4,5,6,7,8,9,10]) */
