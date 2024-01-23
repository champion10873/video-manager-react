const BoxText = (props) => {
  return (
    <div className="w-9 h-[35px] bg-indigo-900 rounded-md text-white flex justify-center items-center">
      {props.label}
    </div>
  );
};

export default BoxText;
