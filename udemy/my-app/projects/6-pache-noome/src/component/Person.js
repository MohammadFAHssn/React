import "../styles/personStyle.css";

import readingNumEasier from "../functions/readingNumEasier";

export default function Person({ person }) {
  return (
    <section className="person">
      {<img src={person.image} alt="person" />}
      <p className="person-name">{person.name}</p>
      {person.account === 0 ? (
        <p className="person-account"> حسابش پاکه 😎</p>
      ) : person.account > 0 ? (
        <p className="person-account">
          {readingNumEasier(Math.round(person.account))} تومان از گروه بستانکار
          🤗
        </p>
      ) : (
        <p className="person-account">
          {readingNumEasier(Math.round(Math.abs(person.account)))} تومان به گروه
          بدهکاره 😒
        </p>
      )}
    </section>
  );
}
