const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar", () => {
    it("should return false when 'shift' argument is not given.", () => {
          const expected = false;
          let shift;
          const actual = caesar("thinkful", shift);
          expect(actual).to.equal(expected);
    });

    it("should return false when 'shift' argument is zero.", () => {
      const expected = false;
      const shift = 0;
      const actual = caesar("thinkful", shift);
      expect(actual).to.equal(expected);
    });

    it("should return false when 'shift' argument is greater than 25.", () => {
      const expected = false;
      const shift = 30;
      const actual = caesar("thinkful", shift);
      expect(actual).to.equal(expected);
    });

    it("should ignore Capital letters.", () => {
      const expected = "khoor wkhuh! pb qdph lv pdmg!!";
      const actual = caesar("HELLO THERE! MY NAME IS Majd!!", 3);
      expect(actual).to.equal(expected);
    });

    it("should wrap around the alphabet. For example, shifting 'z' to the right by three should make it the letter 'c'.", () => {
      const expected = "l'p yhub vohhsb, cccccccc";
      const actual = caesar("I'm very sleepy, ZZZZzzzz", 3);
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces and other nonalphabetic symbols in the message before and after encoding.", () => {
      const expected = "wkhuh duh qrq-doskdehwlf vbperov olnh !, ?, #, dqg $ dorqj zlwk vsdfhv wkurxjkrxw wklv vhqwhqfh.";
      const actual = caesar("There are non-alphabetic symbols like !, ?, #, and $ along with spaces throughout this sentence.", 3);
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces and other nonalphabetic symbols in the message before and after decoding.", () => {
      const expected = "there are non-alphabetic symbols like !, ?, #, and $ along with spaces throughout this sentence.";
      const actual = caesar("wkhuh duh qrq-doskdehwlf vbperov olnh !, ?, #, dqg $ dorqj zlwk vsdfhv wkurxjkrxw wklv vhqwhqfh.",3, encode=false);
      expect(actual).to.equal(expected);
    }); 
});

