import { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { KeyboardArrowDown } from "@material-ui/icons";
import { dispatch } from "../../../store/index";
import { changeDropButton1Value } from "../../../store/reducers/snackbar";

const DropButton1 = (props) => {

  const ITEM = props.item;
  const BLOCK_ID = props.Block_id - 1;
  const setInputType = props.setInputType;
  const [buttonType, setButtonType] = useState(ITEM.defaultType);

  useEffect(() => {
    setButtonType(ITEM.defaultType);
  }, [BLOCK_ID]);

  const handleChange = (e) => {
    setButtonType(e.target.value);
    setInputType(e.target.value);
    const data = {
      BLOCK_ID: BLOCK_ID,
      LABEL: ITEM.label,
      VALUE: e.target.value
    }
    dispatch(changeDropButton1Value(data));
  };

  return (
    <FormControl sx={{ width: 108 }}>
      <Select
        value={buttonType}
        onChange={handleChange}
        sx={{
          height: "35px",
          bgcolor: "#e5e7eb",
          fontWeight: 600,
          borderRadius: "6px",
          fontSize: "14px",
        }}
        IconComponent={KeyboardArrowDown}
      >
        <MenuItem value="block">BLOCK</MenuItem>
        <MenuItem value="text">TEXTO</MenuItem>
        <MenuItem value="link">LINK</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DropButton1;
