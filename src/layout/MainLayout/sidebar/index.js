import { Box } from "@mui/material";
import Logo from "./Logo";
import Menu from "./menu-item";

const Sidebar = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Logo />
      <hr color="#F4F7FE"/>
      <Menu />
    </Box>
  );
};

export default Sidebar;
