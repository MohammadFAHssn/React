import "../styles/PersonnelStyle.css";

// import personnel from "../personnel";
import { useQuery } from "@tanstack/react-query";
import { getPersonnel } from "../apiPersonnel";

import ClipLoader from "react-spinners/ClipLoader";

export default function Personnel({
  personnelID,
  name,
  lastName,
  fatherName,
  nationalID,
  selectedPersonnel,
  setSelectedPersonnel,
}) {
  //

  const result = useQuery({
    queryKey: ["personnel"],
    queryFn: getPersonnel,
  });

  if (result.isLoading === true) {
    const override = {
      display: "block",
      margin: "auto",
    };

    return (
      <ClipLoader
        color="#E76F51"
        loading={result.isLoading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }

  if (result.data.status !== 200) {
    return (
      <p style={{ margin: "auto", color: "#3d3d3d", fontSize: "20px" }}>
        اشکال در دریافت اطلاعات!
        <a href="http://localhost:3000/"> برای تلاش مجدد کلیک کنید</a>
      </p>
    );
  }

  const personnel = result.data.data;

  return (
    <section className="personnel">
      <section>
        {personnel.map(
          (person) =>
            selectedPersonnel.includes(person.personnelID) &&
            person.personnelID.includes(personnelID.trim()) &&
            person.name.includes(name.trim()) &&
            person.lastName.includes(lastName.trim()) &&
            person.fatherName.includes(fatherName.trim()) &&
            person.nationalID.includes(nationalID.trim()) && (
              <Person
                key={person.personnelID}
                personnelID={person.personnelID}
                name={person.name}
                lastName={person.lastName}
                fatherName={person.fatherName}
                nationalID={person.nationalID}
                selectedPersonnel={selectedPersonnel}
                setSelectedPersonnel={setSelectedPersonnel}
              />
            )
        )}
      </section>
      <section>
        {personnel.map(
          (person) =>
            !selectedPersonnel.includes(person.personnelID) &&
            person.personnelID.includes(personnelID.trim()) &&
            person.name.includes(name.trim()) &&
            person.lastName.includes(lastName.trim()) &&
            person.fatherName.includes(fatherName.trim()) &&
            person.nationalID.includes(nationalID.trim()) && (
              <Person
                key={person.personnelID}
                personnelID={person.personnelID}
                name={person.name}
                lastName={person.lastName}
                fatherName={person.fatherName}
                nationalID={person.nationalID}
                selectedPersonnel={selectedPersonnel}
                setSelectedPersonnel={setSelectedPersonnel}
              />
            )
        )}
      </section>
    </section>
  );
}

function Person({
  personnelID,
  name,
  lastName,
  fatherName,
  nationalID,
  selectedPersonnel,
  setSelectedPersonnel,
}) {
  function handleSelectedItem(e) {
    let status = 0;

    if (e.target.value === "true") {
      status = 1;
    }

    if (!status) {
      setSelectedPersonnel((selectedPersonnel) => [
        ...selectedPersonnel,
        personnelID,
      ]);
    }

    if (status) {
      setSelectedPersonnel((selectedPersonnel) =>
        selectedPersonnel.filter((person) => person !== personnelID)
      );
    }
  }

  return (
    <form className="person">
      <input
        type="checkbox"
        className="checkbox"
        checked={selectedPersonnel.includes(personnelID)}
        value={selectedPersonnel.includes(personnelID)}
        onChange={handleSelectedItem}
      ></input>
      <label className="personnelID">{personnelID}</label>
      <label className="name">{name}</label>
      <label className="lastName">{lastName}</label>
      <label className="fatherName">{fatherName}</label>
      <label className="nationalID">{nationalID}</label>
    </form>
  );
}
