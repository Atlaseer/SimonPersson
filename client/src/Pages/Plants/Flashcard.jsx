import { useState, useRef, useLayoutEffect } from "react";
import "./Flashcard.css";

function FitText({ children }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.fontSize = "";
    let size = parseFloat(getComputedStyle(el).fontSize);
    while (el.scrollHeight > el.parentElement.clientHeight - 60 && size > 9) {
      size -= 0.5;
      el.style.fontSize = `${size}px`;
    }
  }, [children]);

  return <p ref={ref}>{children}</p>;
}

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
          <FitText>{question}</FitText>

        </div>
        <div className="flashcard-back">
          <span className="fc-label">Answer</span>
          <FitText>{answer}</FitText>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
