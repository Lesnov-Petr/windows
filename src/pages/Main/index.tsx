import { Gallery } from "../../Components/Gallery";
import { Description } from "../../Components/Description";
import { Calc } from "../../Components/Calc";
import { SMain } from "./styles";

const Main: React.FC<{}> = () => {
  return (
    <SMain>
      <Gallery />
      <Description />
      <Calc />
    </SMain>
  );
};

export default Main;
