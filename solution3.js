const solution = findprime(2,30)
function findprime(Start, End){ //declares a prime function and shows an array between the statements
    let prime = [] //declares the array
    for ( let i= Start; i < End; i++){ // shows a for loop with start and end that iterates between the statements
        if(isprime(i)){ // shows a callback function that for each number i called the function(isprime)that is passing (i) as an arguement          
              prime.push(i) //if the function is true it returns the number to a new prime array
        }
    }
    return prime
}

function isprime(num){ // shows a function dependant to each other
    if(num<=1)return false; // it shows that  if number is less than or equal to 1 it should return false since 1 is not a prime number
    for(let i= 2; i<=Math.sqrt(num); i++){ //it uses a for loop to show an iteration between number from 2 to the squareroot of input number
        if(num%i ===0){ // it checks if number is divisible by current loop variable
            return false // if the loop is okay , it returns a false statement
        }
    }
    return true; // it shows the for loop returns a true statement if the input is a prime number
}
console.log(solution)
