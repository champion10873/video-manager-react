const Preview = (props) => {

  const item = props.item;
  
  return (
    <div
      className={`w-[88%] h-[28px] rounded-md border border-black mx-auto my-4 pl-10 relative text-white`}
      style={{backgroundColor: item.defaultColor}}
    >
      {item.defaultValue}
      <div className="absolute top-[-10px] left-[-1px] text-black bg-white w-[20px] h-[20px] rounded-[6px] border border-black flex items-center justify-center">
        {String.fromCharCode(item.label)}
      </div>
    </div>
  );
};

export default Preview;
