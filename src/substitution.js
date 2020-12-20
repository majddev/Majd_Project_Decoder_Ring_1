function substitution(input, alphabet, encode = true) {
    let result = "";
    let index;
    let lowerCaseInput = input.toLowerCase();

    const realAlphabet = "abcdefghijklmnopqrstuvwxyz";
    if (alphabet.length !== 26) return false;

    let text = lowerCaseInput.split("");
    text.some((currentValue,currentIndex,currentArray) => currentArray.lastIndexOf(currentValue) !== currentIndex);

    for (let i=0; i<lowerCaseInput.length; i++) {
        if (lowerCaseInput[i] === " ") result += " ";
        if (encode) {
            index = realAlphabet.indexOf(lowerCaseInput.charAt(i));
            result += alphabet.charAt(index);
        } else if (!encode) {
            index = alphabet.indexOf(lowerCaseInput.charAt(i));
            result += realAlphabet.charAt(index);
        }         
    }
    return result
}

module.exports = substitution;
