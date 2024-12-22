import "../styles/pacheStyle.css";

import { useState } from "react";

import SelectPacheBox from "./SelectPacheBox";
import PersonForPache from "./PersonForPache";

export default function Pache({
  people,
  setPeople,
  localPeople,
  setLocalPeople,
  localPeopleForMadar,
  sumMadar,
  sumPache,
}) {
  const [showBox, setShowBox] = useState(false);
  const [pachePersons, setPachePersons] = useState([]);

  function equalDivision() {
    const numPache = pachePersons.length;
    const equalDivisionValue = sumMadar / numPache;
    if (numPache) {
      const newLocalPeople = structuredClone(localPeople);

      for (let i = 0; i < newLocalPeople.length; i++) {
        if (pachePersons.includes(newLocalPeople[i].ID)) {
          newLocalPeople[i].account = equalDivisionValue;
        }
      }

      setLocalPeople(newLocalPeople);
    }
  }

  function addToPache() {
    if (sumMadar !== sumPache) {
      alert(
        "نه دیگه! جمع خرجی ها باید با جمع مقداری که میره تو پاچه‌ها برابر باشه!"
      );
      return;
    }

    const newPeople = structuredClone(people);
    for (let i = 0; i < people.length; i++) {
      newPeople[i].account =
        people[i].account +
        localPeopleForMadar[i].account -
        localPeople[i].account;
    }
    setPeople(newPeople);
  }

  return (
    <>
      <section className="pache">
        <div
          className="add-button"
          onClick={() => setShowBox((showBox) => !showBox)}
        >
          <p>تو پاچه کی بره؟</p>
          <p>+</p>
        </div>

        <button className="equal-division" onClick={equalDivision}>
          به صورت مساوی تقسیم بشه
        </button>

        <form>
          {pachePersons.map((pachePersonID) => (
            <PersonForPache
              pachePersonID={pachePersonID}
              localPeople={localPeople}
              setLocalPeople={setLocalPeople}
              pachePersons={pachePersons}
              setPachePersons={setPachePersons}
              localPeopleForMadar={localPeopleForMadar}
              key={pachePersonID}
            />
          ))}
        </form>

        <button className="add-to-pache" onClick={addToPache}>
          بزن تو پاچه!
        </button>
      </section>

      {showBox && (
        <SelectPacheBox
          people={people}
          setShowBox={setShowBox}
          pachePersons={pachePersons}
          setPachePersons={setPachePersons}
          localPeople={localPeople}
          setLocalPeople={setLocalPeople}
        />
      )}
    </>
  );
}
