function substitution(input, alphabet, encode = true) {
    if (alphabet.length !== 26) return false;

    const alphabetArray = alphabet.split("");
    let duplicateFound = alphabetArray.some((currentValue,currentIndex) => alphabetArray.indexOf(currentValue) !== currentIndex);
    if (duplicateFound) return false; //Returns false if anything is repeated in the alphabet

    let result = "";
    const realAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const lowerCaseInput = input.toLowerCase();

    for (let i=0; i<lowerCaseInput.length; i++) {
        if (lowerCaseInput[i] === " ") result += " ";
        if (encode) {
            index = realAlphabet.indexOf(lowerCaseInput.charAt(i));
            result += alphabet.charAt(index);
        } else {
            index = alphabet.indexOf(lowerCaseInput.charAt(i));
            result += realAlphabet.charAt(index);
        }         
    }
    return result
}

module.exports = substitution;
