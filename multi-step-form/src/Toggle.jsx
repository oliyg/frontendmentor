import { useState } from "react";

function Toggle({ onSelect }) {
  const [selected, setSelected] = useState(false);

  const onChange = () => {
    setSelected(!selected);
    onSelect ?? onSelect(selected);
  };

  return (
    <div
      className={`w-[2.38rem] h-5 bg-blue-400 cursor-pointer rounded-[0.63rem] flex items-center ${
        selected ? "justify-end" : "justify-start"
      }`}
      onClick={onChange}
    >
      <div className="bg-gray-100 rounded-full w-3 h-3 mx-1"></div>
    </div>
  );
}

export default Toggle;
