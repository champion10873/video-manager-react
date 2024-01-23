import Blocks from "./Blocks";
import BlockDetail from "./BlockDetail";
import { useState } from "react";

const Content = () => {

  const [Block_id, setBlock_id] = useState(1);

  return (
    <div className="mt-10 px-10 w-[1424px]">
      <Blocks setBlock_id={setBlock_id} />
      <BlockDetail Block_id={Block_id} />
    </div>
  );
};

export default Content;
