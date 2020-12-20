function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift > 25) return false;

    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let output = "";
    const lowerCaseInput = input.toLowerCase();
        for (let i=0; i<lowerCaseInput.length; i++) {
            let currentLetter = lowerCaseInput[i];
                if (!alphabet.includes(currentLetter)) {
                    output += currentLetter;
                    continue;
                }
                let currentIndex = alphabet.indexOf(currentLetter);
                let newIndex = (encode) ? (currentIndex + shift) : (currentIndex - shift);
                if (newIndex > 25) newIndex -= 26;
                if (newIndex < 0) newIndex += 26;
                output += alphabet[newIndex];
    } return output;
};

module.exports = caesar;