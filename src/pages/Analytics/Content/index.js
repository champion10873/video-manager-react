import SmallCardSet from "./SmallCardSet";
import StoryCardSet from "./StoryCardSet";
import Button from "../../../components/DefaultButton";
import MostClicked from "./MostClicked";

const Content = () => {
  return (
    <div className="h-[74vh] flex gap-10 mt-[8vh] px-10">
      <div className="h-[100%] w-[42%] min-w-[480px]">
        <SmallCardSet />
        <div className="mt-10 mb-5">
          <Button btnName="#Story1" />
        </div>
        <StoryCardSet />
      </div>
      <MostClicked />
    </div>
  );
};

export default Content;
