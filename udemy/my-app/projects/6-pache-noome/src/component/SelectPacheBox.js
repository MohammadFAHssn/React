import "../styles/selectPacheBoxStyle.css";
import X from "../images/close/X.js";

import PeopleForSelectPache from "./PeopleForSelectPache";

import { useState } from "react";

export default function SelectPacheBox({
  people,
  setShowBox,
  pachePersons,
  setPachePersons,
  localPeople,
  setLocalPeople,
}) {
  const [localPachePersons, setLocalPachePersons] = useState(pachePersons);

  function handleHalle() {
    const newLocalPeople = structuredClone(localPeople);

    for (let i = 0; i < newLocalPeople.length; i++) {
      if (!localPachePersons.includes(newLocalPeople[i].ID)) {
        newLocalPeople[i].account = 0;
      }
    }

    setLocalPeople(newLocalPeople);

    setPachePersons(localPachePersons);
    setShowBox((showBox) => !showBox);
  }

  return (
    <section className="select-pache-box">
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

        <PeopleForSelectPache
          people={people}
          localPachePersons={localPachePersons}
          setLocalPachePersons={setLocalPachePersons}
        />
        <button className="button-select-pache-box" onClick={handleHalle}>
          حله
        </button>
      </section>
    </section>
  );
}
