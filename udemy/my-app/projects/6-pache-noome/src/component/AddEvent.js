import "../styles/addEventStyle.css";

import Madar from "./Madar";
import Pache from "./Pache";

import { useEffect, useState } from "react";

export default function AddEvent({ people, setPeople }) {
  function setInitialLocalPeople(people) {
    const localPeople = structuredClone(people);
    for (let i = 0; i < people.length; i++) {
      localPeople[i].account = 0;
    }
    return localPeople;
  }

  const [localPeopleForMadar, setLocalPeopleForMadar] = useState(
    setInitialLocalPeople(people)
  );
  const [localPeopleForPache, setLocalPeopleForPache] = useState(
    setInitialLocalPeople(people)
  );

  const [sumMadar, setSumMadar] = useState(0);
  const [sumPache, setSumPache] = useState(0);

  useEffect(() => {
    let localSumMadar = 0;
    for (let i = 0; i < localPeopleForMadar.length; i++) {
      localSumMadar = localSumMadar + localPeopleForMadar[i].account;
    }
    setSumMadar(localSumMadar);
  }, [localPeopleForMadar]);

  useEffect(() => {
    let localSumPache = 0;
    for (let i = 0; i < localPeopleForPache.length; i++) {
      localSumPache = localSumPache + localPeopleForPache[i].account;
    }
    setSumPache(localSumPache);
  }, [localPeopleForPache]);

  return (
    <section className="add-event">
      <Madar
        people={people}
        localPeople={localPeopleForMadar}
        setLocalPeople={setLocalPeopleForMadar}
      />
      <Pache
        people={people}
        setPeople={setPeople}
        localPeople={localPeopleForPache}
        setLocalPeople={setLocalPeopleForPache}
        localPeopleForMadar={localPeopleForMadar}
        sumMadar={sumMadar}
        sumPache={sumPache}
      />
    </section>
  );
}
