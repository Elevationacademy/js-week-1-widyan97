const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
let genes2 = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
genes2[0]=genes[0]
genes2[1]=genes[1]



genes2.splice(3, 1)
genes2.push("AZIN2", "AZIN2")
genes2.unshift("FXT")
console.log(genes2)

//ex2

let p1 = {
    name: "Mariah",
    age: 23 ,
    city:"haifa"
  }


  
let p2 = {
    name: "Mariah",
    age: 24 ,
    city:"tel aviv"
  }
  if (p1.age==p2.age){
   if(p1.city==p2.city)
   console.log("Jill wanted to date Robert")}
   else 
   console.log("Jill wanted to date Robert, but couldn't")

   //ex3
   let myList = [
    {
      "name ": "widyan",
      "email": "widyan@gmail.com"
     
    },
    {
      "name": "jonny",
      "email": "jonny@gmail.com"
      
    }
    
  ]
myList[0].email="widyan97@gmail.com"
myList.splice(1, 1);
console.log(myList);





//ex4
let myList2 = [
    {
      "name ": "manar",
      "email": "manar@gmail.com"
     
    },
    {
      "name": "hadeel",
      "email": "hadeel@gmail.com"
      
    }
    
  ]


myList.push(...myList2)
	
console.log(myList)

//ex5
const library = {
       books: [
       {title: "Lord of the Rings", author: " J.R.R. Tolkien"}, 
      {title: "And Then There Were None", author: "Agatha Christie"}, 
       {title: "Pinocchio", author: "Carlo Collodi"}
    ]
  }
      
  myList.push(...library.books)
      
  console.log(myList)

    
 


