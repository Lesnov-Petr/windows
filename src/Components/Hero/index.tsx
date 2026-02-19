import { useState } from "react";
import { Button } from "../Button";
import FormContact from "../Form";
import Modal from "../Modal";

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
  const [isOpenModal, setIsOpenModal] = useState(false);
  const listRepait = [
    { name: "Диагностика и профилактика" },
    { name: "Регулировка и Герметичность" },
    { name: "Замена фарнитуры и механизма" },
  ];
  const listProduction = [
    { name: "Производство и установка окон по индивидуальным заказам" },
    { name: "Гарантийное обслуживание на весь срок службы окон" },
  ];

  const handleClick = () => {
    setIsOpenModal(!isOpenModal);
  };
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
        <Button type="button" onClick={handleClick}>
          Заказать замер
        </Button>
      </SContainer>
      <SContainer>
        <SBoxForm>
          <STitleForm>Бесплатная консультация</STitleForm>
          <FormContact />
        </SBoxForm>
      </SContainer>
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
