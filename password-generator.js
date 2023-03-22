const generatePassword = require("generate-password");

const password = generatePassword.generate({
  length: 5,
  numbers: true,
  symbols: true,
  uppercase: true,
  excludeSimilarCharacters: true,
});

console.log(`Password is: ${password}`);
