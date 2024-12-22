import "../styles/peopleForSelectPacheStyle.css";

import { useState } from "react";

import MagnifyingGlass from "../images/magnifying-glass-for-selectMadar/MagnifyingGlass";
import PersonForSelectPache from "./PersonForSelectPache";

export default function PeopleForSelectPache({
  people,
  localPachePersons,
  setLocalPachePersons,
}) {
  const [searchedPerson, setSearchedPerson] = useState("");

  return (
    <section className="people-for-select-pache">
      <form className="search-box">
        <MagnifyingGlass />
        <input
          type="text"
          className="search-input"
          value={searchedPerson}
          onChange={(e) => setSearchedPerson(e.target.value)}
        ></input>
      </form>

      <section className="search-result">
        {people.map(
          (person) =>
            person.name.includes(searchedPerson.trim()) && (
              <PersonForSelectPache
                person={person}
                key={person.ID}
                searchedPerson={searchedPerson}
                localPachePersons={localPachePersons}
                setLocalPachePersons={setLocalPachePersons}
              />
            )
        )}
      </section>
    </section>
  );
}
