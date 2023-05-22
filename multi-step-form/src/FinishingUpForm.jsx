function FinishingUpForm() {
  return (
    <div className="text-left">
      <div className="p-4 bg-gray-200 rounded-lg desktop:px-6">
        <p className="text-sm desktop:text-base text-blue-400 font-bold">
          Arcade (Monthly)
        </p>
        <div className="flex justify-between mb-3 desktop:mb-4">
          <a
            href="#"
            className="underline text-gray-500 desktop:text-sm desktop:leading-5"
          >
            Change
          </a>
          <span className="font-bold desktop:text-base desktop:leading-5">
            $9/mo
          </span>
        </div>
        <div className="border-[1px] border-gray-300"></div>
        <div className="mt-3 flex justify-between desktop:mt-4">
          <span className="text-sm leading-5 text-gray-500">
            Online service
          </span>
          <span>+$1/mo</span>
        </div>
        <div className="mt-3 flex justify-between">
          <span className="text-sm leading-5 text-gray-500">
            Larger storage
          </span>
          <span>+$2/mo</span>
        </div>
      </div>
      <p className="mt-6 px-4 flex justify-between">
        <span className="text-sm leading-5 text-gray-500">
          Total (per month)
        </span>
        <span className="text-lg leading-5 font-bold text-blue-300">
          +$12/mo
        </span>
      </p>
    </div>
  );
}

export default FinishingUpForm;
