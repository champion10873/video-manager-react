const SmallWhiteCard = (props) => {
  return (
    <div className="w-[48%] h-[100%] bg-white rounded-[20px] relative">
      <div className="absolute left-[6%] top-[6%] text-indigo-900 text-[22px] font-bold">
        {props.title}
      </div>
      <div className="absolute right-[10%] bottom-[6%] text-indigo-900 text-[32px] font-bold">
        {props.value}
      </div>
    </div>
  );
};

export default SmallWhiteCard;
