//ex1

const calcAge = function(year1,year2){
 return year1-year2
 
    }
    const age = calcAge(2017, 1989)
    console.log(age) //returns 28


    //ex2
         const Age = function(year2,year1){
          age1=year2-year1
         return age1
          
          
           }
        const ages = calcAge(2018, 2015)
           console.log("You are either"+ (ages) +" or "+(ages-1) ) 

        //ex3
           const isEven = function(num){
               if (num%2==0)
               return true
               else return false}

               const number=isEven(10)
               console.log(number)
            

               //ex4
               const printEven = function(arr){
                for (let i=0; i<arr.length; i++) {

                  let  tf=isEven(arr[i])
                   if (tf==false)
                   console.log(arr[i])

               }
            }
               const numbers = [1, 5, 3,10,15]
               
                printEven(numbers)

                //ex5
                const check = function (array, num) {
                  for(let number of array) {
                    if(number === num) {
                      return true
                    }
               } 
                  return false
                }
                   
                const nums = [20,30, 50,10]
                   
                console.log(check(nums, 50))

                
