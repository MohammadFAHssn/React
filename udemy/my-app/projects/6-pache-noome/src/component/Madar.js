import { useState } from "react";
import "../styles/madarStyle.css";

import SelectMadarBox from "./SelectMadarBox";
import PersonForMadar from "./PersonForMadar";

export default function Madar({ people, localPeople, setLocalPeople }) {
  const [showBox, setShowBox] = useState(false);
  const [madarPersons, setMadarPersons] = useState([]);

  return (
    <>
      <section className="madar">
        <div
          className="add-button"
          onClick={() => setShowBox((showBox) => !showBox)}
        >
          <p>کی مادرخرج شده؟</p>
          <p>+</p>
        </div>

        <form>
          {madarPersons.map((madarPersonID) => (
            <PersonForMadar
              madarPersonID={madarPersonID}
              localPeople={localPeople}
              setLocalPeople={setLocalPeople}
              madarPersons={madarPersons}
              setMadarPersons={setMadarPersons}
              key={madarPersonID}
            />
          ))}
        </form>
      </section>

      {showBox && (
        <SelectMadarBox
          people={people}
          setShowBox={setShowBox}
          madarPersons={madarPersons}
          setMadarPersons={setMadarPersons}
          localPeople={localPeople}
          setLocalPeople={setLocalPeople}
        />
      )}
    </>
  );
}
