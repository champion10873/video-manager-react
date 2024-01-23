import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { KeyboardArrowDown } from "@material-ui/icons";
import { dispatch } from "../../../store/index";
import { changeDropButton2Value } from "../../../store/reducers/snackbar";

const DropButton2 = (props) => {
  const ITEM = props.item;
  const BLOCK_ID = props.Block_id - 1;
  const handleChange = (e) => {
    const data = {
      BLOCK_ID: BLOCK_ID,
      LABEL: ITEM.label,
      VALUE: e.target.value
    }
    dispatch(changeDropButton2Value(data));
  };

  return (
    <FormControl sx={{ width: 212 }}>
      <Select
        value={ITEM.defaultValue}
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
        <MenuItem value="block1">Block #1</MenuItem>
        <MenuItem value="block2">Block #2</MenuItem>
        <MenuItem value="block3">Block #3</MenuItem>
        <MenuItem value="block4">Block #4</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DropButton2;
