const consonants = "bcdfghjklmnpqrstvwxyz";
const vowels = "aeiou";
const enPhrase = process.argv[2];

function translator(phrase) {
  const words = phrase.split(" ");
  const pigSentence = words.map((word) => {
    const isCapital = word[0] === word[0].toUpperCase();
    word = word.toLowerCase();
    let pigWord;
    if (consonants.includes(word[0]) && vowels.includes(word[1])) {
      pigWord = word.slice(1) + word.slice(0, 1) + "ay";
    } else if (consonants.includes(word[0]) && consonants.includes(word[1])) {
      pigWord = word.slice(2) + word.slice(0, 2) + "ay";
    } else if (vowels.includes(word[0])) {
      pigWord = word + "way";
    }
    if (isCapital) {
      pigWord = pigWord.charAt(0).toUpperCase() + pigWord.slice(1);
    }
    return pigWord;
  });
  const result = pigSentence.join(" ");
  return result;
}

console.log(translator(enPhrase));
