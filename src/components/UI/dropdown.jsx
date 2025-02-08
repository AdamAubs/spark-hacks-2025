import {useState, useRef} from "react";

export default function Dropdown({label, children}) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 200); // 200ms delay
  };

  return (
    <div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="font-bold px-4 py-2 rounded-md text-black hover:bg-blue-100 transition">{label}</button>

      {isOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white text-black shadow-md rounded-md p-3 w-56">
          {children}
        </div>
      )}
    </div>
  );
}
