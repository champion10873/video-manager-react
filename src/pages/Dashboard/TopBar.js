import Button from "../../components/DefaultButton";
import SearchBar from "../Section/Dashboard/SearchBar";
import FilterButton from "../Section/Dashboard/FilterButton";
import OrderButton from "../Section/Dashboard/OrderButton";

const TopBar = (props) => {
  
  const setSearchKey = props.setSearchKey;
  const setFilterKey = props.setFilterKey;
  const setOrderKey = props.setOrderKey;

  return (
    <div className="flex h-[40px] justify-between mt-6 px-12">
      <a href="/flows">
          <Button btnName="+ Create Flow" />
      </a>
      <div className="flex gap-6 items-center">
        <FilterButton setFilterKey={setFilterKey} />
        <OrderButton setOrderKey={setOrderKey} />
        <SearchBar setSearchKey={setSearchKey} />
      </div>
    </div>
  );
};

export default TopBar;
