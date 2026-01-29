import factoryWindow from "../../assets/images/factoryWindow.png";
import installWindow from "../../assets/images/installWindow.png";
import repairWindow from "../../assets/images/repairWindow.png";
import FormContact from "../Form";
import {
  SHero,
  STitle,
  SSubTitle,
  SList,
  SItem,
  SIcon,
  SContainer,
  SBoxForm,
  STitleForm,
} from "./styled";

const Hero: React.FC = () => {
  const listSubTitle = [
    { title: "Производство", icon: factoryWindow },
    { title: "Установка", icon: installWindow },
    { title: "Ремонт", icon: repairWindow },
  ];
  return (
    <SHero>
      <SContainer>
        <SBoxForm>
          <STitleForm>Бесплатная консультация</STitleForm>
          <FormContact />
        </SBoxForm>
      </SContainer>
      <SContainer>
        <STitle>Окна ПВХ</STitle>
        <SList>
          {listSubTitle.map((item) => (
            <SItem>
              <SIcon src={item.icon} />
              <SSubTitle>{item.title}</SSubTitle>
            </SItem>
          ))}
        </SList>
      </SContainer>
    </SHero>
  );
};

export default Hero;
