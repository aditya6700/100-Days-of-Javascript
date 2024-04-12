//* -----------------------------------------------
//* Programming Question: Sort an Array
//* -----------------------------------------------

// ? Write a function to sort an array of numbers in an ascending order.

const sortArray = (arr, order) => {
    return arr.sort((a, b) => order ? b - a : a - b);
}

// Example usage:
console.log(sortArray([5, 23, 10, 8],0)); // Output: [3, 5, 8,10]
console.log(sortArray([5, 23, 10, 8],1)); // Output: [3, 5, 8,10]

//todo Requirements:
//? The function should take an array of numbers as input and sort oder.
//? sort order = 0 - ascending 1 - descending
//? It should return a new array with the numbers sorted in ascending order.
//? The original array should remain unchanged.