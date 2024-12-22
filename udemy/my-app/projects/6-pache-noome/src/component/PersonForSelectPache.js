import "../styles/personForSelectPacheStyle.css";

export default function PersonForSelectPache({
  person,
  localPachePersons,
  setLocalPachePersons,
}) {
  const selectStatus = localPachePersons.includes(person.ID);

  function handleSelected() {
    if (!selectStatus) {
      setLocalPachePersons((localPachePersons) => [
        ...localPachePersons,
        person.ID,
      ]);
    }

    if (selectStatus) {
      setLocalPachePersons((localPachePersons) =>
        localPachePersons.filter((p) => p !== person.ID)
      );
    }
  }

  return (
    <section
      className="person-for-select-pache"
      style={{
        border: selectStatus ? "1px solid #4dabf7" : "0px solid black",
      }}
      onClick={handleSelected}
    >
      {<img src={person.image} alt="person" />}
      <p className="person-name">{person.name}</p>
    </section>
  );
}
