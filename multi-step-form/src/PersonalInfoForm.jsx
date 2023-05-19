import TextInput from "./TextInput";

function PersonalInfoForm(params) {
  return (
    <>
      <TextInput labelName={"Name"} placeholder={"e.g. Stephen King"} />
      <TextInput
        labelName={"Email Address"}
        placeholder={"e.g. stephenking@lorem.com"}
      />
      <TextInput
        labelName={"Phone Number"}
        placeholder={"e.g. +1 234 567 890"}
      />
    </>
  );
}

export default PersonalInfoForm;
