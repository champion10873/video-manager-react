import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ThemeProvider } from "@mui/system";
import theme from "../../../theme";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const OrderButton = (props) => {
  const [tag, setTag] = useState("id");
  const setOrderKey = props.setOrderKey;

  const handleChange = (e) => {
    setTag(e.target.value);
    setOrderKey(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControl sx={{ width: 106 }} size="small" color="primary">
        <Select
          value={tag}
          onChange={handleChange}
          sx={{
            height: 36,
            bgcolor: "#11047A",
            color: "white",
            borderRadius: "20px",
            fontSize: "14px",
            textAlign: "center",
          }}
          IconComponent={() => <KeyboardArrowDownIcon className="absolute right-2 cursor-pointer" />}
        >
          <MenuItem value="id">Order by</MenuItem>
          <MenuItem value="title">Title</MenuItem>
          <MenuItem value="creation">Creation</MenuItem>
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

export default OrderButton;
