import { useEffect, useState } from "react";
import { dispatch } from "../../../store/index";
import { changeInputValue } from "../../../store/reducers/snackbar";

const InputArea = (props) => {
  const ITEM = props.item;
  const BLOCK_ID = props.Block_id - 1;
  const [value, setValue] = useState(ITEM.defaultValue);

  useEffect(() => {
    setValue(ITEM.defaultValue);
  }, [BLOCK_ID]);

  const handleChange = (e) => {
    setValue(e.target.value);
    const data = {
      BLOCK_ID: BLOCK_ID,
      LABEL: ITEM.label,
      VALUE: e.target.value
    }
    dispatch(changeInputValue(data));
  }

  return (
    <div
      className={`w-[212px] h-[35px] rounded-md bg-gray-200 flex items-center pl-3 pr-1 font-semibold border border-solid border-[#acadb0]`}
    >
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="w-[190px] outline-none bg-gray-200"
      ></input>
    </div>
  );
};

export default InputArea;
