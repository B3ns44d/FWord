const FWord = require("../index");

const makeid = () => {
  let text = "";
  const alphabet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 5; i++)
    text += alphabet.charAt(Math.floor(Math.random() * alphabet.length));

  return text;
};
console.log(makeid());

console.log(FWord(makeid()).value);

// print Length of brainfuck code
console.log(FWord(makeid()).value.length);


console.log(FWord(makeid()).value.length / makeid().length);
