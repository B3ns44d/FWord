# F-Word

`F-Word the smallest Javascript brainfuck code generator`

# Usage

Create a Brainfuck code that outputs a given text

```javascript
const FWord = require("../index");

const randomshit = () => {
  let text = "";
  const alphabet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 5; i++)
    text += alphabet.charAt(Math.floor(Math.random() * alphabet.length));

  return text;
};

console.log(randomshit()); // ex: AmAwy

console.log(FWord(randomshit()).value); // ex: ++++++++++[>++++++++>++++++++++>+++++++++++<<<-]>-----.>--.>+++.<<.++++.

// print Length of brainfuck code
console.log(FWord(randomshit()).value.length); // ex: 74


console.log(FWord(randomshit()).value.length / randomshit().length); // ex: 15

```

# Install

To install the package, use the standard NPM install command:

```
npm install fword
```
The package is handwritten, minified js code, no build process is required, and you can directly edit and execute the source!


# License

Please see the LICENSE file for license information.
