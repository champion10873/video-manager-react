import CreateVideoCards from "./CreateVideoCards";

const Content = () => {
  return (
    <div className="mt-6 px-10">
      <div className="text-black text-[22px] font-normal font-['DM Sans'] leading-normal">
        Selecione uma das opções para criar seu vídeo:
      </div>
      <div className="mt-4">
        <CreateVideoCards />
      </div>
    </div>
  );
};

export default Content;
