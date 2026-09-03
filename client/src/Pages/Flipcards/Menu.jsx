import { useState } from "react";
import "./Menu.css";

function Menu({ chapters, onSelect }) {
  const [openChapter, setOpenChapter] = useState(null);

  const toggle = (id) => setOpenChapter((prev) => (prev === id ? null : id));

  return (
    <div className="fc-menu">
      <h1 className="fc-menu-title">Flashcards - Communication</h1>
      <p className="fc-menu-subtitle">Choose a chapter to practice</p>

      <ul className="fc-chapter-list">
        {chapters.map((ch) => (
          <li key={ch.id} className="fc-chapter-item">
            <button
              className={`fc-chapter-btn ${openChapter === ch.id ? "open" : ""}`}
              onClick={() => toggle(ch.id)}
            >
              <span className="fc-chapter-num">Chapter {ch.id}</span>
              <span className="fc-chapter-name">{ch.title}</span>
              <span className="fc-chevron">{openChapter === ch.id ? "▲" : "▼"}</span>
            </button>

            {openChapter === ch.id && (
              <ul className="fc-subchapter-list">
                {ch.subchapters.map((sub) => (
                  <li key={sub.id}>
                    <button
                      className="fc-subchapter-btn"
                      onClick={() => onSelect(ch, sub)}
                    >
                      <span className="fc-sub-id">{sub.id}</span>
                      <span className="fc-sub-name">{sub.title}</span>
                      <span className="fc-card-count">{sub.cards.length} cards</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
