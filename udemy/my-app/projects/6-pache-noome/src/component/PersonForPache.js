import X from "../images/close/X.js";

import "../styles/personForPacheStyle.css";

export default function PersonForPache({
  pachePersonID,
  localPeople,
  setLocalPeople,
  pachePersons,
  setPachePersons,
  localPeopleForMadar,
}) {
  let index;
  for (let i = 0; i < localPeople.length; i++) {
    if (localPeople[i].ID === pachePersonID) index = i;
  }

  function handelDeletePache() {
    const newLocalPeople = structuredClone(localPeople);
    newLocalPeople[index].account = 0;

    setLocalPeople(newLocalPeople);

    setPachePersons((pachePersons) =>
      pachePersons.filter((pachePerson) => pachePerson !== pachePersonID)
    );
  }

  function handleAccount(e) {
    // setValue(Number(e.target.value));

    const newLocalPeople = structuredClone(localPeople);
    newLocalPeople[index].account = Number(e.target.value);

    setLocalPeople(newLocalPeople);
  }

  return (
    <section className="person-for-pache">
      <label className="person-name">{localPeople[index].name}</label>
      <section className="delete-pache" onClick={handelDeletePache}>
        <X
          width="29px"
          height="29px"
          fill="#69ddf3"
          onMouseOverFill="#003049"
        />
      </section>
      <input
        type="number"
        value={localPeople[index].account}
        onChange={handleAccount}
      ></input>
      <label className="label">تومان</label>
    </section>
  );
}
