const SmallCardSet = () => {
  return (
    <div className="h-[calc(74%-96px)] w-[100%] flex gap-8 text-white">
      <div className="w-[48%] h-[100%] bg-zinc-300 rounded-[20px]">
        <div className="w-[88%] h-[28px] bg-[#4318FF] rounded-md border border-black mx-auto mt-32 pl-10 relative">
          Lorem
          <div className="absolute top-[-10px] left-[-1px] text-black bg-white w-[20px] h-[20px] rounded-[6px] border border-black flex items-center justify-center">
            B
          </div>
        </div>
        <div className="w-[88%] h-[28px] mx-auto pl-[41px]">Ipsum</div>
      </div>
      <div className="w-[48%] h-[100%] bg-white rounded-[20px] p-4">
        <div className="text-indigo-900 text-xl font-bold ml-2">#Story 1</div>
        <div className="w-[88%] h-[30px] text-slate-400 font-medium mt-8 border-solid border-b-2 relative">
          <div className="absolute left-0 top-0 ml-2">Views</div>
          <div className="absolute left-2/3">5.000</div>
        </div>
        <div className="w-[88%] h-[30px] text-slate-400 font-medium mt-2 border-solid border-b-2 relative">
          <div className="absolute left-0 top-0 ml-2">B - cliques</div>
          <div className="absolute left-2/3">3000</div>
        </div>
        <div className="w-[88%] h-[30px] text-slate-400 font-medium mt-2 border-solid border-b-2 relative">
          <div className="absolute left-0 top-0 ml-2">C - cliques</div>
          <div className="absolute left-2/3">1800</div>
        </div>
        <div className="w-[88%] h-[30px] text-slate-400 font-medium mt-2 border-solid border-b-2 relative">
          <div className="absolute left-0 top-0 ml-2">D - cliques</div>
          <div className="absolute left-2/3">200</div>
        </div>
      </div>
    </div>
  );
};

export default SmallCardSet;
