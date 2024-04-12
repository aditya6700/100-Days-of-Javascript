//* -----------------------------------------------
//* Programming Question: Hash Tag Generator
//* -----------------------------------------------

//? You are required to implement a function generateHash that generates a hash tag from a given input string. The hash tag should be constructed as follows:

// ? The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.
//? If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.
//? Otherwise, the function should return the generated hash tag prefixed with #.

//* Write a function generateHash to accomplish this task.
const generateHash = (str) => {
    if (str.trim().length === 0 || str.length > 280) {
        return false
    }

    listOfWords = str.split(" ");

    // //* method 1
    // capitalisedWords = listOfWords.map(ele => {
    //     let charLst = ele.split("");
    //     charLst[0] = charLst[0].toUpperCase();
    //     return charLst.join("");
    // });
    // capitalisedWords.unshift("#")
    // return capitalisedWords.filter(e => e !== undefined).join("");

    // //* method 2
    // capitalisedWords = listOfWords.map(ele => ele.replace(ele[0], ele[0].toUpperCase()));
    // capitalisedWords.unshift("#")
    // return capitalisedWords.filter(e => e !== undefined).join("");

    // //* method 3
    // capitalisedWords = listOfWords.map(ele => ele.replace(ele[0], ele[0].toUpperCase()));
    // return `#${capitalisedWords.filter(e => e !== undefined).join("")}`;
    
    //* method 4
    capitalisedWords = listOfWords.map(ele => ele.charAt(0).toUpperCase() + ele.slice(1));
    return `#${capitalisedWords.filter(e => e !== undefined).join("")}`;

}


console.log(generateHash("my name is sai aditya"));
// o/p = "#MyNameIsSaiAditya"
