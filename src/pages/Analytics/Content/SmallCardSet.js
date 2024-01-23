import SmallWhiteCard from "../../../components/SmallWhiteCard";

const SmallCardList = [
  { title: "Total Views", value: "5.000" },
  { title: "Most Watched Flow", value: "#Flow 1" },
];

const SmallCardSet = () => {
  return (
    <div className="h-[26%] w-[100%] flex gap-8">
      {SmallCardList.map((item) => (
        <SmallWhiteCard title={item.title} value={item.value} />
      ))}
    </div>
  );
};

export default SmallCardSet;
