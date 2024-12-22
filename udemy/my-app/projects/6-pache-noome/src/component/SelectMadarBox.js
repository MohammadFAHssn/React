import "../styles/selectMadarBoxStyle.css";
import X from "../images/close/X.js";

import PeopleForSelectMadar from "./PeopleForSelectMadar";

import { useState } from "react";

export default function SelectMadarBox({
  people,
  setShowBox,
  madarPersons,
  setMadarPersons,
  localPeople,
  setLocalPeople,
}) {
  const [localMadarPersons, setLocalMadarPersons] = useState(madarPersons);

  function handleHalle() {
    const newLocalPeople = structuredClone(localPeople);

    for (let i = 0; i < newLocalPeople.length; i++) {
      if (!localMadarPersons.includes(newLocalPeople[i].ID)) {
        newLocalPeople[i].account = 0;
      }
    }

    setLocalPeople(newLocalPeople);

    setMadarPersons(localMadarPersons);
    setShowBox((showBox) => !showBox);
  }

  return (
    <section className="select-madar-box">
      <section className="the-box">
        <section
          className="close-icon"
          onClick={() => setShowBox((showBox) => !showBox)}
        >
          <X
            width="32px"
            height="32px"
            fill="#8193a5"
            onMouseOverFill="#3b4752"
          />
        </section>
        <p className="headline">مادرخرج رو انتخاب کنید</p>

        <PeopleForSelectMadar
          people={people}
          localMadarPersons={localMadarPersons}
          setLocalMadarPersons={setLocalMadarPersons}
        />
        <button className="button-select-madar-box" onClick={handleHalle}>
          حله
        </button>
      </section>
    </section>
  );
}
