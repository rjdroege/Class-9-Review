// Aim: Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

// arrayOfMultiples(7, 5)    ➞    [7, 14, 21, 28, 35]

const arrayOfMultiples = (a,b) => {
    let arr = [];
    let x = 1;
    for (let i = 1; i <= b; i++){
        arr.push(a*x);
        x++;
    }
    return arr;
    }

console.log(arrayOfMultiples(3,5));
