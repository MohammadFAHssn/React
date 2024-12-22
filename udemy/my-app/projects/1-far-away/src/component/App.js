import { useState } from "react";

import Logo from "./Logo";
import AddItem from "./AddItem";
import List from "./List";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function addItem(newItem) {
    setItems((items) => [...items, newItem]);
  }
  // And so all the logic about updating that state
  // is here in the same component

  function deleteItem(item) {
    setItems((items) => items.filter((i) => i.id !== item.id));
  }

  function checkItem(item) {
    setItems((items) =>
      items.map((i) => (i.id === item.id ? { ...i, packed: !i.packed } : i))
    );
  }

  function clearList(e) {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete all items?")) {
      setItems([]);
    }
  }

  return (
    <>
      <Logo />

      <AddItem items={items} addItem={addItem} />

      <List
        items={items}
        deleteItem={deleteItem}
        checkItem={checkItem}
        clearList={clearList}
      />

      <Stats items={items} />
    </>
  );
}

export default App;
