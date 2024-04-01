const number = []//declares constant number
const start = -5
const end = 7
function numberBetween(num1, num2){ //declares a number function and returns the array between the two numbers num1, num2
    const start = Math.min(num1, num2); // calculates and return the smallest number given as input parameter
    const end = Math.max(num1, num2) // calculates and return the largest number given as input parameter
    for (let i=start; i <= end; i++){ // show a for loop that show the start and ending of parameters and iterate between the two numbers
        number.push(i); // pushes the number increment to the array
    }
    return number // returns the numbers
}
const resultArray = numberBetween(start, end)
console.log(resultArray)