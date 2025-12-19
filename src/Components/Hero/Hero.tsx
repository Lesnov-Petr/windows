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
import factoryWindow from "../../assets/images/factoryWindow.png";
import installWindow from "../../assets/images/installWindow.png";
import repairWindow from "../../assets/images/repairWindow.png";
import { Container } from "../Container";
import FormContact from "../Form";
import { ButtonCall } from "../ButtonCall";
import { useState } from "react";
import Modal from "../Modal";

const Hero: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClick = () => {
    setIsOpenModal(!isOpenModal);
  };
  const listSubTitle = [
    { title: "Производство", icon: factoryWindow },
    { title: "Установка", icon: installWindow },
    { title: "Ремонт", icon: repairWindow },
  ];
  return (
    <SHero>
      <Container styles={{ display: "flex", padding: "0px 70px" }}>
        <SContainer>
          <SBoxForm>
            <STitleForm>Заказать обратный звонок</STitleForm>
            <FormContact />
          </SBoxForm>
          <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
            <ButtonCall
              onClick={handleClick}
              floating={true}
              hideOnTop={true}
            />
          </div>
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
      </Container>
      <Modal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        title={"Заказать замер"}
      >
        <FormContact onClick={handleClick} />
      </Modal>
    </SHero>
  );
};

export default Hero;
