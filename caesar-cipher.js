const phrase = process.argv[2].toLowerCase();
const shift = parseInt(process.argv[3]);
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(phrase, shift) {
  const words = phrase.split(" ");
  const cipher = words.map((word) => {
    const wordArr = word.split("");
    const letters = wordArr.map((letter) => {
      const newLetter = alphabet[(alphabet.indexOf(letter) + shift + 26) % 26];
      return newLetter;
    });
    const newWord = letters.join("");
    return newWord;
  });
  let result = cipher.join(" ");
  return result;
}

console.log(caesarCipher(phrase, shift));
