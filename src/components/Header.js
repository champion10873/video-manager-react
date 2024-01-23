import HeaderRightBar from "./HeaderRightBar";
import PageName from "./PageName";

const Header = (props) => {
  return (
    <div className="flex h-[56px] justify-between mt-10 px-10">
      <PageName name={props.name} subtitle={props.subtitle} />
      <HeaderRightBar />
    </div>
  );
};

export default Header;
