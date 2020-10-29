//===================================================================================
//Section 1
//===================================================================================

const run = true //Global variable

if (run) {
    let distance = 8 //local variable belong to if
    for (var i = 0; i < distance; i++) {
        console.log("running") //will console log
    }
    console.log("Finished running " + distance + " miles")//will console log
}


console.log("Damn, you see this gal? She ran " + distance + " miles")  // is not defined because distance is only defined locally within the scope of the if

//===================================================================================
//Section 2//===================================================================================
if (13 == "space") {
    let cowSound = "moo"//local variable belong to if
}
else {
    console.log("Cow says " + cowSound)//cowSound is not defined
}


//===================================================================================
//Section 3
//===================================================================================
const serveOrders = function (orders) {//local variable belong to serveOrders 

    for (let order of orders) {
        let specialOrder = "special " + order //local variable belong to for 
        console.log("Served a " + specialOrder)//will console log
    }

    console.log("Finished serving all the orders: " + orders)//will coonsole log
}
const allOrders = ["fish", "lettuce plate", "curious cheese"] 
serveOrders(allOrders)

//===================================================================================
//Section 4
//===================================================================================
const pot = "red pot with earth in it" //global variable 


const getSeed = function () {
    const seed = "brown seed"//local variable belong to  getSeed 
}

const plant = function () {
    getSeed()//will not work
    console.log("Planting the " + seed + " inside a " + pot) //seed is not defined
}

plant()

//===================================================================================
//Section 5 - Optional(if you have time)
//===================================================================================
const doesUserExist = function (name) {//local
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
    for (let u of users) {
        if (u.name == name) {
            const found = true //found is not defined
        }
    }
    return found
}

const userExists = doesUserExist("Lucius")  //error
if (userExists) {
    console.log("We found the ragamuffin!")
}
else {
    console.log("No idea where this person is.")
}

//===================================================================================

//===================================================================================
const isEnough = false//global

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true//error
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}