import { useState } from "react";
import "./Flashcard.css";

function Flashcard({ question, answer }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flashcard ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped((f) => !f)}
      aria-label={flipped ? `Answer: ${answer}` : `Question: ${question}`}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <span className="fc-label">Question</span>
          <p>{question}</p>
        </div>
        <div className="flashcard-back">
          <span className="fc-label">Answer</span>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
