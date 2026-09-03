import { useState } from "react";
import Menu from "./Menu";
import Flashcard from "./Flashcard";
import chapters from "./flashcards";
import "./flipcards.css";

function FlipcardsPage() {
  const [selection, setSelection] = useState(null);
  const [index, setIndex] = useState(0);

  const handleSelect = (chapter, subchapter) => {
    setSelection({ chapter, subchapter });
    setIndex(0);
  };

  const handleBack = () => {
    setSelection(null);
    setIndex(0);
  };

  if (!selection) {
    return <Menu chapters={chapters} onSelect={handleSelect} />;
  }

  const { chapter, subchapter } = selection;
  const cards = subchapter.cards;
  const card = cards[index];

  const prev = () => setIndex((i) => (i - 1 + cards.length) % cards.length);
  const next = () => {
    if (index < cards.length - 1) {
      setIndex(index + 1);
      return;
    }
    const chapterIdx = chapters.indexOf(chapter);
    const subIdx = chapter.subchapters.indexOf(subchapter);
    if (subIdx < chapter.subchapters.length - 1) {
      setSelection({ chapter, subchapter: chapter.subchapters[subIdx + 1] });
    } else if (chapterIdx < chapters.length - 1) {
      const nextChapter = chapters[chapterIdx + 1];
      setSelection({ chapter: nextChapter, subchapter: nextChapter.subchapters[0] });
    }
    setIndex(0);
  };

  return (
    <div className="fc-app">
      <div className="fc-practice-header">
        <button className="fc-back-btn" onClick={handleBack}>← Back</button>
        <div className="fc-breadcrumb">
          <span>Chapter {chapter.id}</span>
          <span className="fc-sep">›</span>
          <span>{subchapter.title}</span>
        </div>
      </div>

      <p className="fc-hint">Click the card to reveal the answer</p>

      <Flashcard key={card.id} question={card.question} answer={card.answer} />

      <div className="fc-controls">
        <button onClick={prev} className="fc-btn">&#8592; Prev</button>
        <span className="fc-counter">{index + 1} / {cards.length}</span>
        <button onClick={next} className="fc-btn">Next &#8594;</button>
      </div>
    </div>
  );
}

export default FlipcardsPage;
