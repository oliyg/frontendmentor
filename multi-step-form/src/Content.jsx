import Desc from "./Desc";
import PersonalInfoForm from "./PersonalInfoForm";
import PlanForm from "./PlanForm";

const descs = [
  {},
  {
    title: "Personal Information",
    desc: "Please provide your name, email address, and phone number.",
  },
  {
    title: "Select your plan",
    desc: "You have the option of monthly or yearly billing.",
  },
];

function Content({ step }) {
  return (
    <div className="-mt-[4.56rem] mx-[1rem] desktop:mx-0 bg-gray-100 rounded-[0.63rem] px-6 py-8 desktop:mt-0 desktop:w-full desktop:ml-[4.75rem] desktop:relative">
      <Desc title={descs[step].title} desc={descs[step].desc} />

      {/* form */}
      <div className="mt-[1.38rem] desktop:mt-10">
        {step === 1 ? <PersonalInfoForm /> : <></>}
        {step === 2 ? <PlanForm /> : <></>}
      </div>
    </div>
  );
}

export default Content;
