import { useState } from "react";
import X from "../images/close/X.js";

import "../styles/personForMadarStyle.css";

export default function PersonForMadar({
  madarPersonID,
  localPeople,
  setLocalPeople,
  madarPersons,
  setMadarPersons,
}) {
  let index;
  for (let i = 0; i < localPeople.length; i++) {
    if (localPeople[i].ID === madarPersonID) index = i;
  }

  function handelDeleteMadar() {
    const newLocalPeople = structuredClone(localPeople);
    newLocalPeople[index].account = 0;

    setLocalPeople(newLocalPeople);

    setMadarPersons((madarPersons) =>
      madarPersons.filter((madarPerson) => madarPerson !== madarPersonID)
    );
  }

  const [value, setValue] = useState(0);

  function handleAccount(e) {
    setValue(Number(e.target.value));

    const newLocalPeople = structuredClone(localPeople);
    newLocalPeople[index].account = Number(e.target.value);

    setLocalPeople(newLocalPeople);
  }

  return (
    <section className="person-for-madar">
      <label className="person-name">{localPeople[index].name}</label>
      <section className="delete-madar" onClick={handelDeleteMadar}>
        <X
          width="29px"
          height="29px"
          fill="#eea2bc"
          onMouseOverFill="#003049"
        />
      </section>
      <label className="label">چقدر خرح کرده؟</label>
      <input type="number" value={value} onChange={handleAccount}></input>
      <label className="label">تومان</label>
    </section>
  );
}
