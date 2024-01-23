import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { IconButton, ThemeProvider } from "@mui/material";
import theme from "../theme";

const HeaderRightBar = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="bg-white rounded-[30px] shadow flex items-center justify-between px-4 py-2">
        <div className="text-black text-sm font-normal font-['DM Sans'] leading-tight">
          Welcome Marcelo!
        </div>
        <IconButton>
          <NotificationsNoneIcon />
        </IconButton>
        <IconButton>
          <BedtimeIcon />
        </IconButton>
        <IconButton>
          <InfoOutlinedIcon />
        </IconButton>
        <div className="w-[41px] ml-4 cursor-pointer">
          <img src="./avatar.jpg" alt="avatar" className="rounded-full" />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default HeaderRightBar;
