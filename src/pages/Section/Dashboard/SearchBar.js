import SearchIcon from "@mui/icons-material/Search";

const SearchBar = (props) => {

  const setSearchKey = props.setSearchKey;
  
  const handleChange = (e) => {
    setSearchKey(e.target.value)
  }

  return (
    <>
      <div className={`w-[223px] h-[41px] bg-slate-200 rounded-full flex items-center mx-2 px-4 bg-white`}>
        <SearchIcon fontSize="small" />
        <input type="text" className="outline-none bg-inherit ml-2 w-full" placeholder="Search" onChange={handleChange}  />
      </div>
    </>
  );
};

export default SearchBar;
