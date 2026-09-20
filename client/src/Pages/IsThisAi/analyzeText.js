import namesCsv from "../../assets/CommonNames.csv?raw";

const NAMES = new Map();
const csvLines = namesCsv.split(/\r?\n/);
for (let i = 1; i < csvLines.length; i++) {
  const name = csvLines[i].trim();
  if (name !== "") {
    NAMES.set(name.toLowerCase(), name);
  }
}

function findNameInInput(input) {
  const words = input.split(/\s+/);
  for (let i = 0; i < words.length; i++) {
    const word = words[i].replace(/[^a-z]/g, "");
    if (NAMES.has(word)) {
      return NAMES.get(word);
    }
  }
  return null;
}

export function getResponse(rawInput) {
  const trimmedInput = rawInput.trim();
  const input = trimmedInput.toLowerCase();

  if (input === "") {
    return "Please type any words first!";
  }

  const matchedName = findNameInInput(input);
  if (matchedName) {
    return `Hello ${matchedName}!`;
  }

  switch (input) {
    case "hello":
      return "Hello stranger!";
    case "hi":
      return "Hi there!";
    case "hey":
      return "hey there!";
    case "how are you":
    case "how are you?":
      return "I'm just some if and switch statements, I've not been told to think or care!";
    case "bye":
    case "goodbye":
      return "goodbye!";
    case "thanks":
    case "thank you":
      return "you're welcome!";
    case "who are you":
    case "who are you?":
      return "I'm a simple response bot built with if, else and switch statements.";
    default:
      if (input.includes("hello")) {
        return "Hello stranger!";
      } else if (input.includes("hi")) {
        return "Hi there!";
      } else if (input.includes("bye")) {
        return "goodbye!";
      } else if (input.includes("thank")) {
        return "you're welcome!";
      } else {
        return "I've no response to that input, Simon didn't give me more of a personality than that!";
      }
  }
}
