//* ------------------------------------------------------
//* Interview Question: Count Occurrences of Character
//* ------------------------------------------------------
//! Task:
//? Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.

const countChar = (inputStr, searchChar) => {
    inputStr = inputStr.toLowerCase();
    searchChar = searchChar.toLowerCase();

    // //* method 1:
    // let count = 0
    // inputStr.split("").forEach(ele => {
    //     ele === searchChar ? count++ : 0;
    // });
    // return count;

    // //* method 2:
    // return inputStr.split("").filter(ele => ele === searchChar).length;

    //* method 3:
    return inputStr.split("").reduce((accum, curr) => {
        curr === searchChar ? accum++ : 0;
        return accum;
    },0);
}

console.log(countChar("Mississippi", "I")); // Output: 4

// todo Constraints:
//? The function should be case-sensitive.
//? The function should handle both lowercase and uppercase characters.
//? The character parameter can be any printable ASCII character (the function should accept any character that is part of the ASCII character set and is printable).
