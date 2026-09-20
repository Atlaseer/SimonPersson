const AI_PHRASES = [
  "as an ai language model",
  "i'm just an ai",
  "delve into",
  "it's important to note",
  "it is important to note",
  "in today's digital age",
  "in the realm of",
  "furthermore",
  "moreover",
  "in conclusion",
  "on the other hand",
  "a testament to",
  "plays a pivotal role",
  "plays a crucial role",
  "let's dive in",
  "unlock the power of",
  "unleash the power of",
  "in summary",
  "overall, it is clear",
  "navigating the landscape",
  "at the end of the day",
  "it's worth noting",
  "not only... but also",
  "underscores the importance",
  "seamlessly integrate",
  "robust and scalable",
  "elevate your",
  "game changer",
  "cutting-edge",
  "in this article, we will",
];

function splitSentences(text) {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function splitWords(text) {
  return text
    .toLowerCase()
    .match(/[a-z']+/g) || [];
}

function average(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
}

function standardDeviation(numbers) {
  if (numbers.length < 2) return 0;
  const mean = average(numbers);
  const variance = average(numbers.map((n) => (n - mean) ** 2));
  return Math.sqrt(variance);
}

function analyzeText(rawText) {
  const text = rawText.trim();
  const words = splitWords(text);
  const sentences = splitSentences(text);
  const sentenceLengths = sentences.map((s) => splitWords(s).length);

  let score = 30;
  const reasons = [];

  if (words.length < 15) {
    return {
      score: 5,
      verdict: "Too short to tell",
      message:
        "That's a pretty short snippet — give me at least a sentence or two and I'll take a proper guess.",
      reasons: [],
    };
  }

  const lowerText = text.toLowerCase();
  const foundPhrases = AI_PHRASES.filter((phrase) => lowerText.includes(phrase));
  if (foundPhrases.length > 0) {
    score += foundPhrases.length * 15;
    reasons.push(
      `Uses ${foundPhrases.length === 1 ? "a phrase" : "phrases"} common in AI writing: "${foundPhrases[0]}"`
    );
  }

  const sentenceLengthStdDev = standardDeviation(sentenceLengths);
  const avgSentenceLength = average(sentenceLengths);
  if (sentences.length >= 3 && sentenceLengthStdDev < 3 && avgSentenceLength > 8) {
    score += 15;
    reasons.push("Sentence lengths are unusually consistent");
  } else if (sentenceLengthStdDev > 8) {
    score -= 10;
    reasons.push("Sentence lengths vary a lot, which reads as more human");
  }

  const uniqueWords = new Set(words);
  const lexicalDiversity = words.length ? uniqueWords.size / words.length : 0;
  if (lexicalDiversity < 0.45 && words.length > 40) {
    score += 10;
    reasons.push("Vocabulary repeats itself more than typical human writing");
  } else if (lexicalDiversity > 0.75) {
    score -= 10;
    reasons.push("Vocabulary is quite varied");
  }

  const emDashCount = (text.match(/—|--/g) || []).length;
  if (emDashCount >= 2) {
    score += 10;
    reasons.push("Leans heavily on em dashes");
  }

  const listMarkers = (text.match(/^\s*[-*•\d]+[.)]\s+/gm) || []).length;
  if (listMarkers >= 2) {
    score += 10;
    reasons.push("Structured like a tidy bullet list");
  }

  const contractionCount = (text.match(/\b(don't|can't|won't|it's|i'm|you're|we're|didn't|isn't|that's)\b/gi) || [])
    .length;
  if (contractionCount === 0 && words.length > 40) {
    score += 8;
    reasons.push("No contractions at all — very formal");
  } else if (contractionCount > 0) {
    score -= 5;
  }

  const exclamations = (text.match(/!/g) || []).length;
  const typos = (text.match(/\b(teh|recieve|definately|alot|wierd)\b/gi) || []).length;
  if (typos > 0) {
    score -= 20;
    reasons.push("Contains a typo humans tend to make");
  }
  if (exclamations > 2) {
    score -= 5;
  }

  score = Math.max(2, Math.min(98, Math.round(score)));

  let verdict;
  let message;
  if (score >= 75) {
    verdict = "Probably AI";
    message = `I'd put this at about ${score}% likely AI-generated. The polish and structure give it away.`;
  } else if (score >= 45) {
    verdict = "Hard to tell";
    message = `I'm genuinely unsure — roughly ${score}% likely AI-generated. Could go either way.`;
  } else {
    verdict = "Probably human";
    message = `I'd say about ${score}% likely AI-generated. This reads like a person wrote it.`;
  }

  return { score, verdict, message, reasons: reasons.slice(0, 3) };
}

module.exports = { analyzeText };
