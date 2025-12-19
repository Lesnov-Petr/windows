import { SAuth, SAuthIcon, SHeader } from "./styles";
import FormContact from "../Form";
import { LogoFirst } from "../Logo";
import { Navigation } from "../Navigation";
import { Contacts } from "../Contacts";
import { Button } from "../Button";
import { useState } from "react";
import IconAuth from "../../assets/images/iconAdmin.png";
import Modal from "../Modal";
import { ToolHint } from "../ToolHint";
import Auth from "../Auth";

export const Header: React.FC<{}> = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isModalAuth, setModalAuth] = useState(false);

  const handleClick = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleAuth = () => {
    setModalAuth(!isOpenModal);
  };

  return (
    <SHeader>
      <LogoFirst />
      <Navigation />
      <Button type="button" onClick={handleClick}>
        Заказать замер
      </Button>
      <Contacts />
      <SAuth onClick={handleAuth}>
        <SAuthIcon src={IconAuth} alt="authIcon" />
        <ToolHint>личный кабинет</ToolHint>
      </SAuth>

      <Modal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        title={"Заказать замер"}
      >
        <FormContact onClick={handleClick} />
      </Modal>
      <Modal isOpen={isModalAuth} onClose={() => setModalAuth(false)}>
        <Auth />
      </Modal>
    </SHeader>
  );
};
