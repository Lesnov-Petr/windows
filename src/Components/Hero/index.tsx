import FormContact from "../Form";

import {
  SHero,
  STitle,
  SIcon,
  SContainer,
  SBoxForm,
  STitleForm,
  SBoxTitle,
  SList,
  SItem,
  SIconQuality,
  SText,
} from "./styled";

const Hero: React.FC = () => {
  const listRepait = [
    { name: "Диагностика и профилактика" },
    { name: "Регулировка и Герметичность" },
    { name: "Замена фарнитуры и механизма" },
  ];
  const listProduction = [
    { name: "Производство и установка окон по индивидуальным заказам" },
    { name: "Гарантийное обслуживание на весь срок службы окон" },
  ];
  return (
    <SHero>
      <SContainer>
        <SBoxTitle>
          <div style={{ display: "flex" }}>
            <SIconQuality />
            <STitle>Ремонт окон</STitle>
          </div>

          <SList>
            {listRepait.map((item) => (
              <SItem>
                <SIcon />
                <SText>{item.name}</SText>
              </SItem>
            ))}
          </SList>
        </SBoxTitle>
        <SBoxTitle>
          <div style={{ display: "flex" }}>
            <SIconQuality />
            <STitle>Производство окон</STitle>
          </div>
          <SList>
            {listProduction.map((item) => (
              <SItem>
                <SIcon />
                <SText>{item.name}</SText>
              </SItem>
            ))}
          </SList>
        </SBoxTitle>
      </SContainer>
      <SContainer>
        <SBoxForm>
          <STitleForm>Бесплатная консультация</STitleForm>
          <FormContact />
        </SBoxForm>
      </SContainer>
    </SHero>
  );
};

export default Hero;
