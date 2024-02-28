// CASSTUDY :- 01 
 
const array = [4,6,8,2,7,9];
    // Get the first element of the array
    const num = array[0];
    console.log(num);

    // Check if the first element is a prime number
    if (num <= 1) {
        console.log(num + " is not a prime number.");
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                console.log(num + " is not a prime number.");
                return false;
            }
        }
        console.log(num + " is a prime number.");
        return true;
    }

//CASESTUDY :-03


     for (let k = 1; k <= 15; k++) {
        if (k % 2 === 0) {
            console.log(k + " is even.");
        } else {
            console.log(k + " is odd.");
        }
        
    }

//CASESTUDY :-04

var array1 = [1, 2, 3, 4, 5];

function sumOfSquares(arr) {
    let sum = 0
    
    // Iterate through the array
    for (let P = 0; P < arr.length; P++) {
        // Calculate the square of each element and add it to the sum
        sum += arr[P] * arr[P];
    }
    
    return sum;
}
const result = sumOfSquares(array1);

console.log("The sum of squares of the elements is:", result); // Output: The sum of squares of the elements is: 55


     console.log("The number is prime.");
     return true;