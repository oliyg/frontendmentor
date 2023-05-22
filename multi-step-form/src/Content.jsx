import AddOnsForm from "./AddOnsForm";
import Desc from "./Desc";
import PersonalInfoForm from "./PersonalInfoForm";
import PlanForm from "./PlanForm";
import FinishingUpForm from "./FinishingUpForm";
import ThankYouForm from "./ThankYouForm";

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
  {
    title: "Pick add-ons",
    desc: "Add-ons help enhance your gaming experience.",
  },
  {
    title: "Finishing up",
    desc: "Double-check everything looks OK before confirming.",
  },
  {},
];

function Content({ step }) {
  return (
    <div className="-mt-[4.56rem] mx-[1rem] desktop:mx-0 bg-gray-100 rounded-[0.63rem] px-6 py-8 desktop:mt-0 desktop:w-full desktop:ml-[4.75rem] desktop:relative shadow-base">
      <Desc title={descs[step].title} desc={descs[step].desc} />

      {/* form */}
      <div className="mt-[1.38rem] desktop:mt-10">
        {step === 1 ? <PersonalInfoForm /> : <></>}
        {step === 2 ? <PlanForm /> : <></>}
        {step === 3 ? <AddOnsForm /> : <></>}
        {step === 4 ? <FinishingUpForm /> : <></>}
        {step === 5 ? <ThankYouForm /> : <></>}
      </div>
    </div>
  );
}

export default Content;
