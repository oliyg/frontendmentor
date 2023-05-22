import { useState } from "react";
import CheckBox from "./CheckBox";
import OptionSelector from "./OptionSelector";

const options = [
  {
    id: 1,
    name: "Online service",
    desc: "Access to multiplayer games",
    priceMonthly: "2",
    priceYearly: "1",
    imgUrl: "",
    extraText: "",
  },
  {
    id: 2,
    name: "Larger storage",
    desc: "Extra 1TB of cloud save",
    priceMonthly: "3",
    priceYearly: "2",
    imgUrl: "",
    extraText: "",
  },
  {
    id: 3,
    name: "Customizable profile",
    desc: "Custom theme on your profile",
    priceMonthly: "2",
    priceYearly: "1",
    imgUrl: "",
    extraText: "",
  },
];

function AddOns() {
  const [billingType, setBillingType] = useState(true); // true for monthly

  return (
    <>
      <OptionSelector
        options={options.map((itm) => {
          if (billingType) {
            return {
              id: itm.id,
              name: itm.name,
              value: itm.id,
              ...itm,
              extraText: "+$" + itm.priceMonthly + "/mo",
            };
          } else {
            return {
              id: itm.id,
              name: itm.name,
              value: itm.id,
              ...itm,
              extraText: "+$" + itm.priceYearly + "/yr",
            };
          }
        })}
      />
    </>
  );
}

export default AddOns;
