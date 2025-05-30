import React from "react";

const PropertyPanel = ({ selectedElement, updateElement }) => {
  if (!selectedElement) return <p>Select an element</p>;

  const handleChange = (e) => {
    updateElement(selectedElement.id, e.target.value);
  };

  return (
    <div>
      <h2 className="font-bold mb-2">Edit Element</h2>
      <input
        type="text"
        className="border p-2 w-full"
        value={selectedElement.content}
        onChange={handleChange}
      />
    </div>
  );
};

export default PropertyPanel;
