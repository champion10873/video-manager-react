import FastfoodIcon from "@mui/icons-material/Fastfood";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const MovieCard = (props) => {
  return (
    <a href="/account">
      <div className="w-[calc((85vw-96px)*0.24)] h-[calc((100vh-184px)*0.31)] rounded-3xl cursor-pointer bg-white hover:bg-[#2B3674] text-indigo-900 hover:text-[#eee] p-[1vw] relative mt-[calc((100vh-184px)*0.015)]">
        <div className="gradient-overlay rounded-2xl">
          <img src={`./${props.style.image}`} alt={props.style.image} className="h-[16vh] w-full rounded-2xl" />
        </div>
        <div className="text-2xl font-bold px-2 w-full truncate">
          {props.style.title}
        </div>
        <div className="flex align-center text-slate-400 ml-2">
          <FastfoodIcon />
          <div className="text-lg font-medium ml-1">10% cashback & off</div>
        </div>
        <div className="w-[40px] h-[40px] bg-[#5f8696] rounded-[10px] text-white flex items-center justify-center absolute right-8 top-8">
          <AccessTimeOutlinedIcon />
        </div>
      </div>
    </a>
  );
};

export default MovieCard;
