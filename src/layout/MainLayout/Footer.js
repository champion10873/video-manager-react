import { useLocation } from "react-router-dom";

const FooterMenu = [
  {title: "Marketplace"},
  {title: "License"},
  {title: "Terms of Use"},
  {title: "Blog"},
]

const Footer = () => {

  const Location = useLocation();

  return (
    <div
      className={`w-[85%] bg-[#F4F7FE] fixed bottom-0 right-0 px-14 pb-3 pt-1 flex justify-between ${
        Location.pathname === "/dashboard" ? "hidden" : ""
      }`}
    >
      <div className="text-slate-400 text-sm font-medium">
        © 2022 Horizon UI. All Rights Reserved. Made with love by Simmmple!
      </div>
      <div className="flex gap-10">
        {
          FooterMenu.map((item) => (
            <div className="text-slate-400 text-sm font-medium hover:text-black cursor-pointer">{item.title}</div>
          ))
        }
      </div>
    </div>
  );
};

export default Footer;
