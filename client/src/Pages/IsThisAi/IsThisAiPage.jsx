import { useState } from "react";
import "../../Styles/index.css";
import "./isThisAi.css";
import { getResponse } from "./analyzeText";

function IsThisAiPage() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setResponse(getResponse(input));
  };

  const handleClear = () => {
    setInput("");
    setResponse(null);
  };

  return (
    <main className="is-ai-page">
      <div className="is-ai-box">
        <h1>Artificial intelligence or artificially stupid?</h1>
        <p className="is-ai-intro">
          Type something in and this clanker will respond! Try saying "hello".
        </p>

        <form className="is-ai-form" onSubmit={handleSubmit}>
          <textarea
            className="is-ai-textarea"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type something here..."
            rows={4}
          />
          <div className="is-ai-buttons">
            <button type="submit" className="button" disabled={!input.trim()}>
              Send
            </button>
            <button type="button" className="button" onClick={handleClear}>
              Clear
            </button>
          </div>
        </form>

        {response && (
          <div className="is-ai-result">
            <p className="is-ai-message">{response}</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default IsThisAiPage;
