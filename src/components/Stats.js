export default function Stats({ items }) {
  const totalCount = items.length;
  const packedCount = items.filter((item) => item.packed).length;
  const percent = Math.round((packedCount / totalCount) * 100);

  return (
    <footer className="stats">
      <em>
        🪑 You have {totalCount} items on your list, and you already packed{" "}
        {packedCount} ({percent}%)
      </em>
    </footer>
  );
}
