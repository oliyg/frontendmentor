function Desc({ title, desc }) {
  return (
    <div className="text-left">
      <div className="text-xl desktop:text-2xl font-bold mb-[0.56rem] desktop:mb-[0.69rem]">
        {title}
      </div>
      <div className="text-base leading-[1.56rem]">{desc}</div>
    </div>
  );
}

export default Desc;
