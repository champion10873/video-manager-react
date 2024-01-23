import CreateCard from "../../components/CreateCard";
import MovieCard from "../../components/MovieCard";
import MovieCardData from "../../data/MovieCardData";

const Content = (props) => {
  const searchKey = props.searchKey;
  const filterKey = props.filterKey;
  const orderKey = props.orderKey;

  return (
    <div className="flex flex-row gap-[1.333%] mt-6 px-12 flex-wrap w-full">
      <CreateCard />
      {MovieCardData.filter((item) =>
        item.tag.toLocaleLowerCase().includes(filterKey.toLocaleLowerCase())
      )
        .filter((item) =>
          item.title.toLowerCase().includes(searchKey.toLowerCase())
        )
        .sort((a, b) => {
          if (a[orderKey] > b[orderKey]) return 1;
          else return -1;
        })
        .map((item) => (
          <MovieCard style={item} />
        ))}
    </div>
  );
};

export default Content;
