import CheckBox from "./CheckBox";
import OptionSelector from "./OptionSelector";

const options = [
  {
    id: 1,
    name: "Online service",
    desc: "Access to multiplayer games",
    priceMonthly: "",
    priceYearly: "",
    imgUrl: "",
    extraText: "+$1/mo",
  },
  {
    id: 2,
    name: "Larger storage",
    desc: "Extra 1TB of cloud save",
    priceMonthly: "",
    priceYearly: "",
    imgUrl: "",
    extraText: "+$2/mo",
  },
  {
    id: 3,
    name: "Customizable profile",
    desc: "Custom theme on your profile",
    priceMonthly: "",
    priceYearly: "",
    imgUrl: "",
    extraText: "+$2/mo",
  },
];

function AddOns() {
  return (
    <>
      <OptionSelector
        options={options.map((itm) => {
          return {
            id: itm.id,
            name: itm.name,
            desc: itm.desc,
            value: itm.id,
            ...itm,
          };
        })}
      />
    </>
  );
}

export default AddOns;
