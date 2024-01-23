import { useEffect, useState } from "react";
import { dispatch } from "../../../store";
import { changeColor } from "../../../store/reducers/snackbar";

const ColorPickerBox = (props) => {
  const ITEM = props.item;
  const BLOCK_ID = props.Block_id - 1;
  const [color, setColor] = useState(ITEM.defaultColor);

  useEffect(() => {
    setColor(ITEM.defaultColor);
  }, [BLOCK_ID]);

  const handleChange = (e) => {
    setColor(e.target.value);
    const data = {
      BLOCK_ID: BLOCK_ID,
      LABEL: ITEM.label,
      VALUE: e.target.value
    }
    dispatch(changeColor(data));
  };

  return (
    <div>
      <input
        type="color"
        id="favcolor"
        name="favcolor"
        value={color}
        onChange={handleChange}
        className="w-9 h-9 m-0 bg-white"
      />
    </div>
  );
};

export default ColorPickerBox;
