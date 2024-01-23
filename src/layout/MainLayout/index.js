// import pages
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Footer from "./Footer";

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  return (
    <div className="flex w-full m-0 relative">
      <div className="fixed w-[15%] h-screen min-w-[200px] bg-white">
        <Sidebar />
      </div>
      <div className="w-[85%] h-screen relative left-[15%]">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
