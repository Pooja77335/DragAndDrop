// Sidebar.jsx
export default function Sidebar({ onDragStart }) {
  return (
    <div className="w-1/4 p-4 border-r">
      <h2 className="font-bold mb-4">Elements</h2>

      <div
        draggable
        onDragStart={(e) => onDragStart(e, 'text')}
        className="p-2 mb-2 bg-gray-200 cursor-move"
      >
        Text
      </div>

      <div
        draggable
        onDragStart={(e) => onDragStart(e, 'image')}
        className="p-2 mb-2 bg-gray-200 cursor-move"
      >
        Image
      </div>

      <div
  draggable
  onDragStart={(e) => onDragStart(e, 'button')}
  className="p-2 mb-2 bg-gray-200 cursor-move"
>
  Button
</div>

    </div>
  );
}
