const PageName = (props) => {
  return (
    <div>
      <div className="text-indigo-900 text-[34px] font-bold font-['DM Sans'] leading-[42px]">
        {props.name}
      </div>
      <div className="text-neutral-400 text-[26px] font-normal font-['DM Sans'] leading-[42px]">
        {props.subtitle}
      </div>
    </div>
  );
};

export default PageName;
