import { useState } from "react";
import { useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

// constant
const menuItem = [
  { title: "Dashboard", path: "/dashboard" },
  { title: "Flows", path: "/flows" },
  { title: "Analytics", path: "/analytics" },
  { title: "Suporte", path: "/support" },
  { title: "Conta", path: "/account" },
  { title: "Log out", path: "/" },
];

const CommonStyle =
  "pl-8 flex justify-between hover:text-[#4318FF] hover:font-bold cursor-pointer";
const ItemSelectStyle1 = "flex items-center py-2 text-[#4318FF] font-bold";
const ItemNormalStyle1 = "flex items-center py-2";
const ItemSelectStyle2 = "ml-3 text-[#2B3674]";
const ItemNormalStyle2 = "ml-3";
const ItemSelectStyle3 = "w-1 h-9 bg-[#4318FF] rounded-[25px] block";
const ItemNormalStyle3 = "";

const Menu = () => {
  const location = useLocation().pathname;
  const [state, setState] = useState(
    location === "/" ? "/dashboard" : location
  );

  return (
    <div className="mt-5 font-semibold text-[#A3AED0]">
      {menuItem.map((item) => (
        <a href={item.path}>
          <div
            className={CommonStyle}
            onClick={() => {
              item.title === "Log out"
                ? setState("/dashboard")
                : setState(item.path);
            }}
          >
            <div
              className={
                state === item.path ? ItemSelectStyle1 : ItemNormalStyle1
              }
            >
              {item.title === "Dashboard" ? (
                <HomeIcon />
              ) : item.title === "Flows" ? (
                <ShoppingCartRoundedIcon />
              ) : item.title === "Analytics" ? (
                <BarChartOutlinedIcon />
              ) : item.title === "Suporte" ? (
                <DashboardIcon />
              ) : item.title === "Conta" ? (
                <PersonIcon />
              ) : (
                <LockIcon />
              )}
              <div
                className={
                  state === item.path ? ItemSelectStyle2 : ItemNormalStyle2
                }
              >
                {item.title}
              </div>
            </div>
            <div
              className={
                state === item.path ? ItemSelectStyle3 : ItemNormalStyle3
              }
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default Menu;
