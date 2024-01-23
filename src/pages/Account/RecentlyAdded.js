import MovieCard from "../../components/MovieCard";

const CardData = [
  {
    image: "card.png",
    title: "#Flow1",
  },
  {
    image: "card.png",
    title: "#Flow2",
  },
  {
    image: "card.png",
    title: "#Flow3",
  },
];

const RecentlyAdded = () => {
  return (
    <div className="mt-12">
      <div className="text-indigo-900 text-2xl font-bold font-['DM Sans'] leading-[42px]">
        Recentemente adicionados
      </div>
      <div className="flex gap-10 mt-8">
        {CardData.map((item) => (
          <MovieCard style={item} />
        ))}
      </div>
    </div>
  );
};

export default RecentlyAdded;
