
//* -----------------------------------------------
//* Programming Question: Longest Word in a String
//* -----------------------------------------------

//? Q: Write a function findLongestword that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

//* Constraints:
//? The input string may contain alphabetic characters, digits, spaces, and punctuation.
//? The input string is non-empty.
//? The input string may contain multiple words separated by spaces.

//* Note:
//? If the input string is empty or contains only whitespace, the function should return an false.
//? The function should ignore leading and trailing whitespace when determining the longest word.

const findLongestWord = (str) => {
    if (str.trim().length === 0) {
        return false
    }

    strList = str.split(' ');

    //* method 1:
    // sortedStrLst = strList.sort((a, b) => a.length - b.length);
    // return sortedStrLst.at(-1);

    //* method 2:
    return strList.reduce((prev, cur) => (cur.length > prev.length ? cur : prev), "");

}

console.log(
    findLongestWord ("Welcome to 100 days of Javascript course")
);