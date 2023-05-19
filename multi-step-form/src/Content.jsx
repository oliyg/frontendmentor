import Desc from "./Desc";
import TextInput from "./TextInput";

function Content() {
  return (
    <div className="-mt-[4.56rem] mx-[1rem] desktop:mx-0 bg-gray-100 rounded-[0.63rem] px-6 py-8 desktop:mt-0 desktop:w-full desktop:ml-[4.75rem]">
      <Desc
        title={"Personal Information"}
        desc={"Please provide your name, email address, and phone number."}
      />

      {/* form */}
      <div className="mt-[1.38rem] desktop:mt-10">
        <TextInput labelName={"Name"} placeholder={"e.g. Stephen King"} />
        <TextInput
          labelName={"Email Address"}
          placeholder={"e.g. stephenking@lorem.com"}
        />
        <TextInput
          labelName={"Phone Number"}
          placeholder={"e.g. +1 234 567 890"}
        />
      </div>
    </div>
  );
}

export default Content;
