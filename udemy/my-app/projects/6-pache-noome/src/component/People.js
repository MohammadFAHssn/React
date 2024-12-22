import "../styles/peopleStyle.css";

import { useState } from "react";

import MagnifyingGlass from "../images/magnifying-glass/MagnifyingGlass.js";
import Person from "./Person";

export default function People({ people }) {
  const [searchedPerson, setSearchedPerson] = useState("");

  return (
    <section className="people">
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
              <Person
                person={person}
                key={person.ID}
                searchedPerson={searchedPerson}
              />
            )
        )}
      </section>
    </section>
  );
}
