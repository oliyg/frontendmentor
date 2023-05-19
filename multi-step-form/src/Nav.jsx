function Nav() {
  return (
    <>
      <div className="w-screen h-[10.75rem] bg-nav-bg bg-no-repeat bg-center bg-cover desktop:w-[17.13rem] desktop:h-full desktop:min-h-[35.5rem] desktop:rounded-[0.63rem] desktop:bg-desktop-nav-bg desktop:bg-bottom desktop:bg-contain desktop:bg-blue-300 flex mx-auto justify-center desktop:flex-col desktop:justify-start desktop:pt-10 desktop:shrink-0">
        {[
          { step: 1, desc: "YOUR INFO" },
          { step: 2, desc: "SELECT PLAN" },
          { step: 3, desc: "ADD-ONS" },
          { step: 4, desc: "SUMMARY" },
        ].map((itm) => {
          return (
            <div
              className="flex mt-8 desktop:mt-0 desktop:mb-8 desktop:ml-8"
              key={itm.step}
            >
              <span className="text-gray-100 border-gray-100 border-[1px] w-[2.06rem] h-[2.06rem] leading-[2.06rem] text-center rounded-full mr-4">
                {itm.step}
              </span>
              <span className="hidden desktop:flex desktop:flex-col items-start">
                <span className="text-[0.75rem] leading-[0.86rem] mb-1 text-blue-200">
                  STEP {itm.step}
                </span>
                <span className="text-gray-100 text-sm font-bold">
                  {itm.desc}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Nav;
