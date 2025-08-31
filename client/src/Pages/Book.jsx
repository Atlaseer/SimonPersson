import { useState } from "react";
import "../Styles/book.css";
import faceImg from "../assets/face-img.jpg";

function Book() {
  const [currentSheet, setCurrentSheet] = useState(0);
  const [flipping, setFlipping] = useState(false);

  const sheets = [
    { left: null, right: "Hello, I'm Simon" }, 
    { left: "I've worked on a few projects on github!", right: "Which has taught me" },
    { left: "Fin", right: null } 
  ];

  const nextSheet = () => {
    if (currentSheet < sheets.length - 1 && !flipping) {
      setFlipping(true);
      setTimeout(() => {
        setCurrentSheet(currentSheet + 1);
        setFlipping(false);
      }, 800);
    }
  };

  const prevSheet = () => {
    if (currentSheet > 0 && !flipping) {
      setFlipping(true);
      setTimeout(() => {
        setCurrentSheet(currentSheet - 1);
        setFlipping(false);
      }, 800);
    }
  };

  const { left, right } = sheets[currentSheet];

  let mode = "";
  if (currentSheet === 0) mode = "first";
  else if (currentSheet === sheets.length - 1) mode = "last";
  else mode = "spread";

  return (
    <main className="homepage">
      <img src={faceImg} alt="portrait-of-simon" className="corner-img" />

      <div className={`book ${mode}`}>
        <div className={`sheet ${flipping ? "flipped" : ""}`}>
          {left && (
            <div className="page left-page" onClick={prevSheet}>
              {left}
            </div>
          )}
          {right && (
            <div className="page right-page" onClick={nextSheet}>
              {right}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Book;
