import "../styles/peopleForSelectMadarStyle.css";

import { useState } from "react";

import MagnifyingGlass from "../images/magnifying-glass-for-selectMadar/MagnifyingGlass";
import PersonForSelectMadar from "./PersonForSelectMadar";

export default function PeopleForSelectMadar({
  people,
  localMadarPersons,
  setLocalMadarPersons,
}) {
  const [searchedPerson, setSearchedPerson] = useState("");

  return (
    <section className="people-for-select-madar">
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
              <PersonForSelectMadar
                person={person}
                key={person.ID}
                searchedPerson={searchedPerson}
                localMadarPersons={localMadarPersons}
                setLocalMadarPersons={setLocalMadarPersons}
              />
            )
        )}
      </section>
    </section>
  );
}
