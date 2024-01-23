import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CreateCard = () => {
  return (
    <a href="/flows">
      <div className="bg-[#11047A] flex justify-center items-center text-white text-2xl relative w-[calc((85vw-96px)*0.24)] h-[calc((100vh-184px)*0.31)] rounded-3xl cursor-pointer mt-[calc((100vh-184px)*0.015)] hover:opacity-[0.9] hover:animate-[scale_0.2s_linear] hover:scale-105">
        <AddCircleOutlineIcon
          sx={{ position: "absolute", transform: "scale(3)" }}
        />
        <div className="absolute top-[66%]">Create Flow</div>
      </div>
    </a>
  );
};

export default CreateCard;
