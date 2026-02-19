import { SLink, SList, SNavigation } from "./styles";

export const Navigation: React.FC = () => {
  return (
    <SNavigation>
      <SList>
        <SLink href="#services">Услуги </SLink>
        <SLink href="#footer">Контакты </SLink>
      </SList>
    </SNavigation>
  );
};
