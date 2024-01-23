const CreateVideoCard = (props) => {
  return (
    <div className="w-[350px] h-[331px] bg-gradient-to-bl from-[#6640FF] to-[#8364FF] rounded-[20px] shadow-lg relative">
      <div className="absolute left-[133px] top-[20%] w-[84px] h-[60px] flex items-center">
        <img className="w-[84px] items-center" src={`./${props.iconName}.png`} alt="Video" />
      </div>
      <div className="absolute left-0 top-[42%] text-center text-neutral-200 text-lg font-normal px-[74px]">
        {props.description}
      </div>
      <div className="absolute left-[101px] top-[66%] w-[148px] bg-white rounded-[70px] text-center py-3 text-[#7551FF] font-semibold">
        {props.btnName}
      </div>
    </div>
  );
};

export default CreateVideoCard;
