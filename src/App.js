import { useState } from "react";

export default function App() {
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([]);

  function handleDelete(Id) {
    setItems((items) => items.filter((item) => item.Id !== Id));
  }

  function AddNewItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description,
      Id: Date.now(),
    };
    AddNewItem(newItem);
    setDescription("");
  }
  return (
    <div className="main">
      <h2>TODO LIST</h2>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleSubmit}>ADD</button>
      </form>

      <ul className="item-list">
        {items.map((items) => (
          <li key={items.Id}>
            {items.description}
            <button onClick={() => handleDelete(items.Id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
