import { useState } from "react";

function OptionSelector({ options, onChange }) {
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
          } mb-3 last:mb-0 flex`}
          onClick={() => onClick(itm)}
          key={itm.id}
        >
          <img src={itm.imgUrl} className="w-10 h-10 inline-block shrink-0 " />
          <div className="flex flex-col justify-between items-start ml-[0.88rem]">
            <p className="text-base font-bold text-blue-400">{itm.name}</p>
            <p className="text-sm text-gray-500">{itm.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OptionSelector;
