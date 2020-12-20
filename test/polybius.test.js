const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe("polybius", () => {
    it("should translate the letters i and j to 42 when encoding.", () => {
          const expected = "4432423352125413 42434243";
          const actual = polybius("thinkful jojo");
          expect(actual).to.equal(expected);
    });

    it("should translate 42 to (i/j) when decoding.", () => {
        const expected = "th(i/j)nkful (i/j)o(i/j)o";
        const actual = polybius("4432423352125413 42434243", encode = false);
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters.", () => {
        const smallLetterInput = polybius("a message");
        const capitalLetterInput = polybius("A Message");
        expect(smallLetterInput).to.equal(capitalLetterInput);
    })

    it("shoud maintain spaces before and after encoding.", () => {
        const expected = "345311315134 23114233441142335141";
        const actual = polybius("spaces maintained");
        expect(actual).to.equal(expected);
    });

    it("shoud maintain spaces before and after decoding too.", () => {
        const expected = "spaces ma(i/j)nta(i/j)ned";
        const actual = polybius("345311315134 23114233441142335141", encode = false);
        expect(actual).to.equal(expected);
    });

});