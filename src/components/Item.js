export default function Item({ item, onDeleteItem, onCheckItem }) {
  return (
    <li>
      <input type="checkbox" onChange={() => onCheckItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>✅</button>
    </li>
  );
}
