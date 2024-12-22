import "../styles/personForSelectMadarStyle.css";

export default function PersonForSelectMadar({
  person,
  localMadarPersons,
  setLocalMadarPersons,
}) {
  const selectStatus = localMadarPersons.includes(person.ID);

  function handleSelected() {
    if (!selectStatus) {
      setLocalMadarPersons((localMadarPersons) => [
        ...localMadarPersons,
        person.ID,
      ]);
    }

    if (selectStatus) {
      setLocalMadarPersons((localMadarPersons) =>
        localMadarPersons.filter((p) => p !== person.ID)
      );
    }
  }

  return (
    <section
      className="person-for-select-madar"
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
