import { useState } from "react";

function CheckBox({ onChange }) {
  const [checked, setCheck] = useState(false);
  const onToggle = () => {
    setCheck(!checked);
    onChange && onChange(checked);
  };

  return (
    <div
      className={`w-5 cursor-pointer h-5 ${
        checked
          ? "bg-blue-300 text-gray-100"
          : "bg-none border-gray-400 border-[1px]"
      } flex justify-center items-center rounded`}
      onClick={onToggle}
    >
      {checked ? <div>&#x2713;</div> : <></>}
    </div>
  );
}

export default CheckBox;
