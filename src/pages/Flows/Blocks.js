import SmallMovieCard from "../../components/SmallMovieCard";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import { addBlockEvent } from "../../store/reducers/snackbar";

const Blocks = (props) => {
  const dispatch = useDispatch();
  const { BlockData } = useSelector((state) => state.snackbar);
  const setBlock_id = props.setBlock_id;

  return (
    <div className="w-full">
      <div className="text-indigo-900 text-2xl font-bold">Blocks</div>
      <div className="flex flex-row mt-1 gap-[2.4%] flex-wrap">
        {BlockData.map((item) => (
          <div className="mt-2" onClick={() => setBlock_id(item.id)}>
            <SmallMovieCard title={item.title} />
          </div>
        ))}
        <div
          className="mt-2 w-[243px] h-[180px] bg-[#11047A] rounded-2xl flex flex-col justify-end items-center text-white text-2xl cursor-pointer hover:opacity-[0.9] hover:animate-[scale_0.2s_linear] hover:scale-105 z-10"
          onClick={() => {
            dispatch(
              addBlockEvent({
                id: BlockData.slice(-1)[0].id + 1,
                title: "Block " + (BlockData.slice(-1)[0].id + 1),
                sourceCode: "undefined",
                interactivity: [
                  {
                    label: 65,
                    defaultType: "",
                    defaultValue: "",
                    defaultColor: "#4318FF",
                  },
                ],
              })
            );
          }}
        >
          <AddCircleOutlineIcon sx={{ transform: "scale(3)" }} />
          <div className="mb-[10%] mt-[16%]">Add New Block</div>
        </div>
      </div>
    </div>
  );
};

export default Blocks;
