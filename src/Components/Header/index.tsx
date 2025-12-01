import { SHeader } from "./styles";
import { LogoFirst } from "../Logo";
import { Navigation } from "../Navigation";
import { Contacts } from "../Contacts";

export const Header: React.FC<{}> = () => {
  return (
    <SHeader>
      <LogoFirst />
      <Navigation />
      <Contacts />
    </SHeader>
  );
};
