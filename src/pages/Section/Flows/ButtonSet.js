import { useEffect, useState } from "react";
import BoxText from "../../../components/BoxText";
import DropButton1 from "./DropButton1";
import DropButton2 from "./DropButton2";
import InputArea from "./InputArea";
import ColorPickerBox from "./ColorPicker";

const ButtonSet = (props) => {
  const item = props.item;
  const Block_id = props.Block_id;
  const [inputType, setInputType] = useState(item.defaultType);

  useEffect(() => {
    setInputType(item.defaultType);
  }, [Block_id]);

  return (
    <div className="mt-1 flex justify-between">
      <div className="flex gap-1">
        <BoxText label={String.fromCharCode(item.label)} />
        <DropButton1 item={item} setInputType={setInputType} Block_id={Block_id} />
        {inputType === "block" ? (
          <DropButton2 Block_id={Block_id} item={item}/>
        ) : (
          <InputArea Block_id={Block_id} item={item} />
        )}
      </div>
      <ColorPickerBox item={item} Block_id={Block_id} />
    </div>
  );
};

export default ButtonSet;
