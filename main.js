//ex1
const myVariable = "Let's try this "
	
const result = myVariable + "is the best thing ever"
console.log(result)


//ex3
const password = "badO23"
const confirmPassword = "bad023"

console.log(password == confirmPassword) // prints false

//ex3
console.log(423 * 12)
console.log(802 / 2)
console.log((5+6)*3)

//ex4

console.log((5 > 2) && false)


console.log(!("knife" === "sword")) // true

console.log(1 < 2) || (-1 > -1) || !false // true

console.log("") // false
console.log((31 % 5) == "1")

console.log(!!true)
console.log("5th Avenue" != "5th Avenue" )// false

console.log(52 !== "52" )//true

console.log(undefined || null) // null


//ex5
let a = 3
console.log(a = 4)
let c = 0
let b = a
console.log(b = 2)
console.log(a = b)
console.log(b = c)
console.log(c = a)
console.log(a = b)

//ex6
let numChildren = 2 // or `let numChildren = Number(prompt("How many children do you have?"))` - we use `Number` to convert what the user types to a number

const isCareful = false

if(!isCareful){
  numChildren++
}

console.log(numChildren) // will print 3


//ex7
const silverwareCount = 13

if(silverWare % 2 != 0){
  console.log("Uh oh, missing something")
} 

//ex8

if(performance == "good") {
    salary += goodBonus
} else if(performance == "stellar") {
  salary += stellarBonus
}
//ex9
const isVIP = false
let cash = 500

if(isVIP || cash > 300){
  console.log("Let me wipe your shoes before you go in")
} else {
  console.log("Hmph.")
}


//ex10
const a = 3
let b = 2
let c = 0 || 12
let d

b = c
b++
if(d){
  b = a
}

d = a + (b * c)
d++
b += 2

//ex11
const gender = null
let profession = "business"
if (gender == "male") {
    profession += "man"
  } else if (gender == "female") {
    proession += "woman"
  } else {
    profession += "person"
  }
  
  console.log(profession)
