import React, { useState } from "react";
import { useDrop } from "react-dnd";

const Canvas = () => {
  const [elements, setElements] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "element",
    drop: (item) => addElement(item.type),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addElement = (type) => {
    const newElement = { id: Date.now(), type, content: `${type} content` };
    setElements((prev) => [...prev, newElement]);
  };

  return (
    <div
      ref={drop}
      className="w-3/4 p-4 bg-white border-l overflow-auto"
      style={{ backgroundColor: isOver ? "#f0f0f0" : "white" }}
    >
      <h2 className="text-xl font-bold mb-4">Canvas</h2>
      {elements.map((el) => (
        <div key={el.id} className="p-2 my-2 border rounded">
          {el.type === "text" && <p>{el.content}</p>}
          {el.type === "image" && (
            <img
              src="https://via.placeholder.com/150"
              alt="placeholder"
              className="w-32"
            />
          )}
          {el.type === "button" && (
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Click me
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Canvas;


