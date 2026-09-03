import { useState } from "react";
import "./Menu.css";

function Menu({ chapters, onSelect, onRandomize }) {
  const [openChapter, setOpenChapter] = useState(null);
  const [checked, setChecked] = useState(new Set());

  const toggle = (id) => setOpenChapter((prev) => (prev === id ? null : id));

  const toggleSub = (subId, e) => {
    e.stopPropagation();
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(subId)) next.delete(subId);
      else next.add(subId);
      return next;
    });
  };

  const toggleChapter = (ch, e) => {
    e.stopPropagation();
    const subIds = ch.subchapters.map((s) => s.id);
    const allChecked = subIds.every((id) => checked.has(id));
    setChecked((prev) => {
      const next = new Set(prev);
      if (allChecked) subIds.forEach((id) => next.delete(id));
      else subIds.forEach((id) => next.add(id));
      return next;
    });
  };

  const handleRandomize = () => {
    const cards = chapters
      .flatMap((ch) => ch.subchapters)
      .filter((sub) => checked.has(sub.id))
      .flatMap((sub) => sub.cards)
      .slice();
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    onRandomize(cards);
  };

  return (
    <div className="fc-menu">
      <h1 className="fc-menu-title">Flashcards - Communication</h1>
      <p className="fc-menu-subtitle">Choose a chapter to practice</p>

      <ul className="fc-chapter-list">
        {chapters.map((ch) => {
          const allChecked = ch.subchapters.every((s) => checked.has(s.id));
          const someChecked = ch.subchapters.some((s) => checked.has(s.id));
          return (
            <li key={ch.id} className="fc-chapter-item">
              <button
                className={`fc-chapter-btn ${openChapter === ch.id ? "open" : ""}`}
                onClick={() => toggle(ch.id)}
              >
                <input
                  type="checkbox"
                  className="fc-checkbox"
                  checked={allChecked}
                  ref={(el) => { if (el) el.indeterminate = someChecked && !allChecked; }}
                  onChange={(e) => toggleChapter(ch, e)}
                  onClick={(e) => e.stopPropagation()}
                />
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
                        <input
                          type="checkbox"
                          className="fc-checkbox"
                          checked={checked.has(sub.id)}
                          onChange={(e) => toggleSub(sub.id, e)}
                          onClick={(e) => e.stopPropagation()}
                        />
                        <span className="fc-sub-id">{sub.id}</span>
                        <span className="fc-sub-name">{sub.title}</span>
                        <span className="fc-card-count">{sub.cards.length} cards</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>

      <button
        className="fc-randomize-btn"
        disabled={checked.size === 0}
        onClick={handleRandomize}
      >
        Randomize questions{checked.size > 0 ? ` (${checked.size} sections)` : ""}
      </button>
    </div>
  );
}

export default Menu;
