import { SLink, SList, SNavigation } from "./styles";

export const Navigation: React.FC = () => {
  return (
    <SNavigation>
      <SList>
        <SLink to="/about">О компании </SLink>
        <SLink to="/uslugi">Услуги</SLink>
        <SLink to="/clients">Клиентам</SLink>
      </SList>
    </SNavigation>
  );
};
