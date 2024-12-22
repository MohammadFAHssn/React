import { useState } from "react";
import "./style.css";

const flashCards = [
  { id: 1, front: "a", back: 1 },
  { id: 2, front: "b", back: 2 },
  { id: 3, front: "c", back: 3 },
  { id: 4, front: "d", back: 4 },
];

function App() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <FlashCard selectedId={selectedId} setSelectedId={setSelectedId} />
    </>
  );
}

function handleClick(flashCard, selectedId, setSelectedId) {
  setSelectedId(flashCard.id !== selectedId ? flashCard.id : null);
}

function FlashCard({ selectedId, setSelectedId }) {
  return (
    <>
      {flashCards.map((flashCard) => (
        <div
          className={flashCard.id === selectedId ? "back" : "front"}
          key={flashCard.id}
          onClick={() => handleClick(flashCard, selectedId, setSelectedId)}
        >
          {flashCard.id === selectedId ? flashCard.back : flashCard.front}
        </div>
      ))}
    </>
  );
}

export default App;
