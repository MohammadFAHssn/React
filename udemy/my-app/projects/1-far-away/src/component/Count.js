export default function Count({ max }) {
  const start = 1,
    stop = max,
    step = 1;

  const numList = Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );
  return numList.map((num) => (
    <option className="count-options" value={num} key={num}>
      {num}
    </option>
  ));
}
