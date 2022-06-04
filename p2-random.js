/*
    CIT 281 Project 2
    Name: Anna Anton
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// return a random letter
function getRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet[getRandomInteger(0,alphabet.length)];
}


// will return the random length string
function getRandomString(minLength, maxLength) {
    let result = "";

    let lengthOfOutputString = getRandomInteger(minLength, maxLength);

    for (let i = 0; i < lengthOfOutputString; i++) {
        result += getRandomLetter();
    }
    return result;
}

console.log(getRandomString(10,20));


// return a string in ascending order
function getSortedString(string) {
    return string.split("").sort().join("");
}