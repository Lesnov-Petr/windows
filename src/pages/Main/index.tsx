import { Description } from "../../Components/Description";
import { Calc } from "../../Components/Calc";
import { SMain } from "./styles";
import Hero from "../../Components/Hero/Hero";

const Main: React.FC<{}> = () => {
  return (
    <SMain>
      <Hero />
      {/* <Gallery /> */}
      <Description />
      <Calc />
    </SMain>
  );
};

export default Main;
