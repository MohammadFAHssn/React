export default function Stats({ items }) {
  if (!items.length) {
    return (
      <section className="stats">
        <strong>Start adding some items to your packing list 😉</strong>
      </section>
    );
  }

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed);
  const packedPercentage = Math.round(
    (packedItems.length * 100) / items.length || 0
  );

  return (
    <section className="stats">
      {packedPercentage === 100 ? (
        <p>
          <strong>You got everything! Ready to go ✈️</strong>
        </p>
      ) : (
        <p>
          💼 You have <strong>{numItems}</strong> items on your list, and you
          already packed <strong>{packedPercentage}%</strong>
        </p>
      )}
    </section>
  );
}
