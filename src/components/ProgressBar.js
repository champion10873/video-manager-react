const ProgressBar = (props) => {
  return (
    <div className="w-full bg-[#F4F7FE] h-[10px] rounded-full">
      <div
        className="bg-[#4318FF] h-[10px] rounded-full"
        style={{ width: `${props.percent}` }}
      />
    </div>
  );
};

export default ProgressBar;
