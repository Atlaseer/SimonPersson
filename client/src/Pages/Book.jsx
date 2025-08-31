import { useState } from 'react';
import '../Styles/book.css';
import faceImg from '../assets/face-img.jpg';

function Book() {
  const [currentPage, setCurrentPage] = useState(0);
  const [flippedPages, setFlippedPages] = useState({}); // track flips individually

  const pages = [
    { left: "", right: "Hello, I'm Simon" },
    { left: "I've worked on a few projects on github!", right: "Which has taught me" },
    { left: "Fin", right: "" }
  ];

  const toggleFlip = (side) => {
    setFlippedPages((prev) => ({
      ...prev,
      [`${currentPage}-${side}`]: !prev[`${currentPage}-${side}`],
    }));
  };

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const left = (pages[currentPage].left || "").trim();
  const right = (pages[currentPage].right || "").trim();

  let mode = "";
  if (currentPage === 0) mode = "first";
  else if (currentPage === pages.length - 1) mode = "last";
  else if (!left || !right) mode = "single";
  else mode = "spread";

  return (
    <main className="homepage">
      <img src={faceImg} alt="portrait-of-simon" className="corner-img" />

      <div className={`book ${mode}`}>
        {left && (
          <div
            className={`page left-page ${
              flippedPages[`${currentPage}-left`] ? "flipped" : ""
            }`}
            onClick={() => {
              toggleFlip("left");
              prevPage();
            }}
          >
            {left}
          </div>
        )}
        {right && (
          <div
            className={`page right-page ${
              flippedPages[`${currentPage}-right`] ? "flipped" : ""
            }`}
            onClick={() => {
              toggleFlip("right");
              nextPage();
            }}
          >
            {right}
          </div>
        )}
      </div>
    </main>
  );
}

export default Book;
