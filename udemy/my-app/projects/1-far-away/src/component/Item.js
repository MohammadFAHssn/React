export default function Item({ item, deleteItem, checkItem }) {
  return (
    <li className="item">
      <form className="item-form">
        <input
          type="checkbox"
          value={item.packed}
          className="check-item"
          onChange={() => checkItem(item)}
        />
        <label style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.count} {item.name}
        </label>
        <button className="delete-item" onClick={() => deleteItem(item)}>
          &#215;
        </button>
      </form>
    </li>
  );
}
