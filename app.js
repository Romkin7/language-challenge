const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

function getInput() {
  const input = process.argv[2];
  if (!input) {
    throw new Error("No input provided for language detection!");
  }
  return detectLang(input);
}
function detectLang(input) {
  const detectedLang = franc(input);
  if (detectedLang === 'und') {
    return console.log(colors.red(`Input ${input} is jibrish!`));
  }
  return console.log(
    colors.green(
      `Input ${colors.blue(input)} language is: "${colors.yellow(
        langs.where("3", detectedLang)?.name
      )}"!`
    )
  );
}

getInput();
