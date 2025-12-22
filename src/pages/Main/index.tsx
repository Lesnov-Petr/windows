import { Description } from "../../Components/Description";
import { Calc } from "../../Components/Calc";
import { SMain } from "./styles";
import Hero from "../../Components/Hero/Hero";
import { Gallery } from "../../Components/Gallery";

const Main: React.FC<{}> = () => {
  return (
    <SMain>
      <Hero />
      <Description />
      <Calc />
      <Gallery />
    </SMain>
  );
};

export default Main;
