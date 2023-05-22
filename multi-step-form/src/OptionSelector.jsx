import { useState } from "react";
import CheckBox from "./CheckBox";

function OptionSelector({ options, onChange }) {
  console.log(
    "🚀 ~ file: OptionSelector.jsx:5 ~ OptionSelector ~ options:",
    options
  );
  const [selected, setSelected] = useState(null);

  const onClick = (itm) => {
    setSelected(itm);
    console.log("🚀 ~ file: OptionSelector.jsx:10 ~ onClick ~ itm:", itm);
    onChange && onChange(selected);
  };

  return (
    <div className="flex flex-col">
      {options.map((itm) => (
        <div
          className={`rounded-lg cursor-pointer border-gray-400 border-[1px] px-4 py-[0.88rem] ${
            selected && itm.id === selected?.id
              ? "border-[#483EFF] bg-[#F8F9FF]"
              : ""
          } mb-3 last:mb-0 flex items-center relative`}
          onClick={() => onClick(itm)}
          key={itm.id}
        >
          {itm.imgUrl ? (
            <img
              src={itm.imgUrl}
              className="w-10 h-10 inline-block shrink-0 "
            />
          ) : (
            <CheckBox />
          )}
          <div className="flex flex-col justify-between items-start ml-[0.88rem]">
            <p className="text-sm font-bold text-blue-400">{itm.name}</p>
            <p className="text-[0.75rem] leading-5 text-gray-500">{itm.desc}</p>
          </div>
          {itm.extraText ? (
            <p className="absolute right-6 text-blue-300 text-sm leading-5">
              {itm.extraText}
            </p>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
}

export default OptionSelector;
