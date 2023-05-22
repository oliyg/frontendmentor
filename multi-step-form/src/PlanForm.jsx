import { useState } from "react";
import OptionSelector from "./OptionSelector";
import Toggle from "./Toggle";

const options = [
  {
    id: 1,
    name: "Arcade",
    priceMonthly: "9",
    priceYearly: "9",
    imgUrl: "/images/icon-arcade.svg",
  },
  {
    id: 2,
    name: "Advanced",
    priceMonthly: "12",
    priceYearly: "12",
    imgUrl: "/images/icon-advanced.svg",
  },
  {
    id: 3,
    name: "Pro",
    priceMonthly: "15",
    priceYearly: "15",
    imgUrl: "/images/icon-pro.svg",
  },
];

function PlanForm() {
  const [billingType, setBillingType] = useState(true); // true for monthly

  return (
    <>
      <OptionSelector
        options={options.map((itm) => {
          if (billingType) {
            return {
              id: itm.id,
              name: itm.name,
              desc: "$" + itm.priceMonthly + "/mo",
              value: itm.priceMonthly,
              ...itm,
            };
          } else {
            return {
              id: itm.id,
              name: itm.name,
              desc: "$" + itm.priceYearly + "/yr",
              value: itm.priceYearly,
              ...itm,
            };
          }
        })}
      />
      <div className="w-full bg-[#F8F9FF] flex h-12 mt-6 items-center justify-center">
        <span className="text-sm mx-6 text-blue-400 font-bold">Monthly</span>
        <Toggle />
        <span className="text-sm mx-6 text-blue-400">Yearly</span>
      </div>
    </>
  );
}

export default PlanForm;
