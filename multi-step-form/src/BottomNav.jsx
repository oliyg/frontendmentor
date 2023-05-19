import ButtonBase from "./ButtonBase";

function BottomNav() {
  return (
    <div className="w-full h-[4.5rem] flex justify-between items-center bg-gray-100 fixed bottom-0 px-4 desktop:hidden">
      <ButtonBase ghost text={"Go Back"} />
      <ButtonBase text={"Next Step"} />
    </div>
  );
}

export default BottomNav;
