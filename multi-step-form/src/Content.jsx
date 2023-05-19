import Desc from "./Desc";

function Content() {
  return (
    <div className="-mt-[4.56rem] mx-[1rem] desktop:mx-0 bg-gray-100 rounded-[0.63rem] px-6 py-8 desktop:mt-0 desktop:w-full">
      <Desc
        title={"Personal Information"}
        desc={"Please provide your name, email address, and phone number."}
      />
    </div>
  );
}

export default Content;
