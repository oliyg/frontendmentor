import { useState } from "react";

function TextInput({ labelName, placeholder, onChange: onChangeEvent }) {
  const [show, setShow] = useState(false);

  const onChange = (ev) => {
    const _val = ev.target.value;
    if (!_val) {
      setShow(true);
      return;
    }
    setShow(false);
    onChangeEvent && onChangeEvent(_val);
  };

  return (
    <div className="relative mb-4">
      <div className="text-[0.75rem] mb-[0.19rem] desktop:text-sm text-blue-400 desktop:mb-2 text-left">
        {labelName}
      </div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className="bg-gray-100 px-[1rem] w-full h-10 placeholder:text-gray-400 text-[0.94rem] leading-[1.08rem] rounded-[0.25rem] border-gray-400 border-[1px] text-base font-bold text-blue-400"
      />
      {show ? (
        <p className="absolute top-0 right-0 text-[0.75rem] desktop:text-sm text-red font-bold">
          This field is required
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default TextInput;
