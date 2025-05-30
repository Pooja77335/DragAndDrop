import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([
    "🍎 Apple",
    "🍇 Grape",
    "🍓 Strawberry",
    "🍍 Pineapple",
    "🍉 Watermelon",
    "🍒 Cherry",
  ]);

  const handleDragStart = (e, index) => {
    console.log("Start dragging", index);
    e.dataTransfer.setData("text/plain", index);
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const draggedIndex = e.dataTransfer.getData("text/plain");
    console.log("Dropped on", index);
    const newItems = [...items];
    const draggedItem = newItems.splice(draggedIndex, 1)[0];
    newItems.splice(index, 0, draggedItem);
    setItems(newItems);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Drag and Drop Fruits</h2>
      {items.map((item, index) => (
        <div
          key={index}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDrop={(e) => handleDrop(e, index)}
          onDragOver={handleDragOver}
          style={{
            margin: "10px 0",
            padding: "1rem",
            backgroundColor: "#f0f0f0",
            border: "1px solid #ccc",
            cursor: "grab",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default App;
