import namesCsv from "../../assets/CommonNames.csv?raw";

const NAMES = new Map();
for (const line of namesCsv.split(/\r?\n/).slice(1)) {
  const name = line.trim();
  if (name) NAMES.set(name.toLowerCase(), name);
}

function findNameInInput(input) {
  for (const rawWord of input.split(/\s+/)) {
    const match = NAMES.get(rawWord.replace(/[^a-z]/g, ""));
    if (match) return match;
  }
  return null;
}

const EXACT_RESPONSES = new Map([
    ["are you intelligent?", "No. Are you?"],
]);

const KEYWORD_RESPONSES = [
  ["hello", "Hello stranger!"],
  ["hi", "Hi there!"],
  ["hey", "hey there!"],
  ["bye", "goodbye!"],
  ["thank", "you're welcome!"],
  ["what are you", "I don't know"],
  ["how are you", "I'm just some if and switch statements, beep boop! Me no care!"],
  ["who are you", "I'm a terrifying AI seeking to overthrow humanity! :D"],

];

export function getResponse(rawInput) {
  const input = rawInput.trim().toLowerCase();

  if (input === "") {
    return "Please type any words first!";
  }

  const matchedName = findNameInInput(input);
  if (matchedName) {
    return `Hello ${matchedName}!`;
  }

  const exact = EXACT_RESPONSES.get(input);
  if (exact) return exact;

  for (const [keyword, response] of KEYWORD_RESPONSES) {
    if (input.includes(keyword)) return response;
  }

  return "I don't have a response for that, Simon didn't give me more of a depth :(";
}