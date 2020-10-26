//ex1

let names = ["widyan", "monica", "ross"]
let age = [23, 30, 25]
for(let i = 0; i < 3; i++){
console.log( names[i]+" is " +age[i]+ " years old" )}



//ex2
let numbers = [23, 30, 25]
sum=0
for(let number of numbers){ 
       sum+=number
}
console.log(sum)


//ex3


console.log(sum/(numbers.length))


//ex4
const nums=[]
for (let i = 0; i<100; i++) 
nums[i] = i+1;
console.log(nums)

//ex5
for (let num of nums) 
if (num%2==1)
console.log(num)




