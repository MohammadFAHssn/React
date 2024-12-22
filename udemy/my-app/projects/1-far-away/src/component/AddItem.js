import { useState } from "react";

import Count from "./Count";

export default function AddItem({ items, addItem }) {
  const [name, setName] = useState("");
  const [count, setCount] = useState(1);

  function handleSubmit(e) {
    /*
    then you see that the form got submitted actually.
    So maybe you saw that there was a brief flash of reloading,
    and that's just a normal behavior of forms in HTML.
    So that has nothing to do with React.
    Now let's just do this one more time, so I can show you.
    So writing test, and then submitting, watch what happens.
    So as I told you before,
    there was like a brief flash,
    and then the page actually reloaded.
    And so the text that we got here is gone.
    Now remember
    that whole conversation about the single page application.
    Where I mentioned that in a single page application,
    like we want to build with React,
    we usually can submit a form without the page reloading.
    So in other words, what we want
    is for this page not to reload.
    And so we need to disable this default behavior of HTML.
    So the way we do that is to accept the event here (event object)
    */
    /*
    havaset bashe ke age dar onSubmit function handleSubmit ro bedoone parameter call konim
    dar bala - mnazooram -> handleSubmit(e) - che e bashe che item bashe event ast!
    */
    e.preventDefault();
    // So let's see what happens now when we submit
    // yeah then nothing happens

    if (!name) return;

    const newItem = {
      id: items[items.length - 1] ? items[items.length - 1].id + 1 : 1,
      name: name,
      count: count,
      packed: false,
      date: Date.now(),
    };

    addItem(newItem);

    setCount(1);
    setName("");
  }

  return (
    <form className="select-items" onSubmit={handleSubmit}>
      {/* deghat kon ke in onClick nist!, onClick male button hast, onSubmit male form */}
      <label className="what">What do you need for your 😍 trip?</label>

      <select
        className="count"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      >
        <Count max="30" />
      </select>

      <input
        type="text"
        placeholder="Enter an item ..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="enter-item"
      ></input>

      <button className="add">add</button>
    </form>
  );
}
