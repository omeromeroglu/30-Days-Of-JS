//this is your main.js script


let firstName ="Name", secondName = "secondName",age= 23

console.log(typeof(firstName))
console.log(typeof(secondName))
console.log(typeof(age))
console.log("10"===10)
let parteIntNumber = parseInt("9,8")
console.log(parteIntNumber == 10)

console.log(true,1," ","qwe")
console.log(false,0,"",null)

console.log(4 != '4')

let date = new Date()
let year = date.getFullYear()
let month = date.getMonth()+ 1

console.log(year)
console.log(month)

//level 2 
//triangle area calculate
/* function triangleArea () {
     base = 0
     height = 0
    
    base = prompt("Enter the base of triange",base)
    height = prompt("Enter the height of triangle", height)
    area = (base*height)/2
    alert(`Total area : ${area}`)
}

/* /* triangleArea() */

/* function highMath (x) {
    let y
    y = x^2 + 6*x + 9
    console.log(y)
}

highMath(-1) */ 


/* function nameController() {

    let name = prompt("Please enter your name",0)
    if(name.length < 7){
        alert("Your name is short")
    }else{
            alert("Your name is long")
        }
    

}

nameController() */
/* 
function livedSecondsCheck(){

    date= new Date()
    year = date.getFullYear()
    
    birthYear = prompt("Enter your birth year",)
    livedYears = year - birthYear

    yourage = new Date (livedYears)
    example = yourage.getFullYear()
    console.log(livedYears * 31556926)
    




}

livedSecondsCheck() */


