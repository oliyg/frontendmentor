function ButtonBase({ text, ghost, primary }) {
  return (
    <button
      className={`h-10 px-4 text-gray-100 rounded ${
        ghost ? "bg-none" : primary ? "bg-[#483EFF]" : "bg-[#022959]"
      } ${ghost ? "text-gray-500" : "text-gray-100"}`}
    >
      {text}
    </button>
  );
}

export default ButtonBase;
