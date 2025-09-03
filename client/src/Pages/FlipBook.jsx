import React, { useMemo, useState, useRef } from "react";
import '../Styles/flipbook.css'

// --- helper functions ---
function buildSheets(pages, title) {
  const sheets = [];
  let i = 0;

  sheets.push({
    front: { kind: "cover", node: title ?? "My Book" },
    back: pages[i] !== undefined ? { kind: "content", node: pages[i++] } : { kind: "blank" },
  });

  while (i + 1 < pages.length) {
    sheets.push({
      front: { kind: "content", node: pages[i++] },
      back: { kind: "content", node: pages[i++] },
    });
  }

  if (i < pages.length) {
    sheets.push({ front: { kind: "content", node: pages[i++] }, back: { kind: "back-cover" } });
  } else {
    sheets.push({ front: { kind: "blank" }, back: { kind: "back-cover" } });
  }

  return sheets;
}

function FaceView({ face }) {
  const shared =
    "absolute inset-0 flex items-center justify-center text-center";

  switch (face.kind) {
    case "cover":
      return (
        <div className={`${shared} bg-emerald-600 text-white font-semibold`}>
          <div className="text-2xl tracking-wide">{face.node}</div>
        </div>
      );
    case "back-cover":
      return <div className={`${shared} bg-neutral-800`} />;
    case "blank":
      return <div className={`${shared} bg-neutral-50`} />;
    case "content":
    default:
      return (
        <div className={`${shared} bg-orange-400`}>
          {/* your content goes here, and will fill the sheet */}
          {face.node}
        </div>
      );
  }
}


function SheetView({ sheet, turned, index, total, onToggle }) {
  return (
    <div
      className="absolute inset-0 [transform-style:preserve-3d] origin-left transition-transform duration-700"
      style={{ transform: turned ? "rotateY(-180deg)" : "rotateY(0deg)" }}
      onClick={(e) => {
        e.stopPropagation();
        onToggle(index);
      }}
    >
      {/* Front */}
      <div className="absolute inset-0 bg-white border border-neutral-200 rounded-r-2xl shadow-md overflow-hidden [backface-visibility:hidden]">
        <FaceView face={sheet.front} />
      </div>

      {/* Back */}
      <div className="absolute inset-0 bg-white border border-neutral-200 rounded-l-2xl shadow-md overflow-hidden [backface-visibility:hidden] rotate-y-180">
        <FaceView face={sheet.back} />
      </div>
    </div>
  );
}

// --- MAIN FLIPBOOK PAGE ---
export default function FlipBook() {
  // Right now just placeholder pages, you can replace later
  const pages = [
    <div className="page" key="1">Page 1</div>,
    <div className="page" key="2">Page 2</div>,
    <div className="page" key="3">Page 3</div>,
    <div className="page" key="4">Page 4</div>,
  ];

  const title = "My FlipBook";
  const sheets = useMemo(() => buildSheets(pages, title), [pages, title]);
  const [turned, setTurned] = useState(() => Array(sheets.length).fill(false));
  const containerRef = useRef(null);
  const zOrder = useMemo(() => sheets.map((_, i) => sheets.length - i), [sheets.length]);

  const goNext = () => {
    const i = turned.findIndex((t) => !t);
    if (i === -1) return;
    setTurned((prev) => prev.map((v, idx) => (idx === i ? true : v)));
  };

  const goPrev = () => {
    const i = [...turned].lastIndexOf(true);
    if (i === -1) return;
    setTurned((prev) => prev.map((v, idx) => (idx === i ? false : v)));
  };

  const handleClick = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x > rect.width / 2) goNext();
    else goPrev();
  };

  const onToggle = (i) => {
    const firstUnturned = turned.findIndex((t) => !t);
    const lastTurned = [...turned].lastIndexOf(true);
    if (i === firstUnturned) goNext();
    else if (i === lastTurned) goPrev();
  };

  return (
    <div className="w-full min-h-screen bg-neutral-100 flex items-center justify-center py-10">
      <div ref={containerRef} className="relative" style={{ width: 720, height: 480 }} onClick={handleClick}>
        <div className="absolute inset-0" style={{ perspective: 1600 }}>
          {sheets.map((sheet, i) => (
            <div key={i} className="absolute inset-0" style={{ zIndex: zOrder[i] }}>
              <SheetView sheet={sheet} turned={turned[i]} index={i} total={sheets.length} onToggle={onToggle} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
