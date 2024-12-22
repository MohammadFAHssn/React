import { useState } from "react";

import Item from "./Item";

export default function List({ items, deleteItem, checkItem, clearList }) {
  const [sortBy, setSortBy] = useState("input order asc");

  let sortedItem = [...items];
  // let sortedItem = items.slice(); engar yek copy azosh mesaze!

  if (sortBy === "input order asc") {
    sortedItem = [...items];
  }

  if (sortBy === "input order des") {
    sortedItem.sort((o1, o2) => -o1.date + o2.date);
  }

  if (sortBy === "packed status") {
    sortedItem.sort((o1, o2) => o1.packed - o2.packed);
  }

  return (
    <section className="items">
      <ul>
        {sortedItem.map((item) => (
          <Item
            item={item}
            deleteItem={deleteItem}
            checkItem={checkItem}
            key={item.id}
          />
        ))}
      </ul>

      <section>
        <form className="handle-items">
          <select
            className="sort-items"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option className="sort-items-options" value="input order asc">
              sort by input order asc
            </option>
            <option className="sort-items-options" value="input order des">
              sort by input order des
            </option>
            <option className="sort-items-options" value="packed status">
              sort by packed status
            </option>
          </select>
          <button className="clear-list" onClick={clearList}>
            clear list
          </button>
        </form>
      </section>
    </section>
  );
}
