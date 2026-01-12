import { SAuth, SAuthBtn, SAuthIcon, SHeader } from "./styles";
import FormContact from "../Form";
import { LogoFirst } from "../Logo";
import { Navigation } from "../Navigation";
import { Contacts } from "../Contacts";
import { Button } from "../Button";
import { useEffect, useState } from "react";
import IconAuth from "../../assets/images/iconAdmin.png";
import IconExit from "../../assets/images/exit.png";
import Modal from "../Modal";
import { ToolHint } from "../ToolHint";
import Auth from "../Auth";
import { useSelector } from "react-redux";
import { authSelectorLogged } from "../../redux/auth/auth-selectors";
import { logOut } from "../../redux/auth/auth-operations";
import { useAppDispatch } from "../../hooks";
import { useNavigate } from "react-router-dom";

export const Header: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isModalAuth, setModalAuth] = useState(false);
  const isLoggedOnSelector = useSelector(authSelectorLogged);

  useEffect(() => {
    if (isLoggedOnSelector && isModalAuth) {
      setModalAuth(!isModalAuth);
    }
  }, [isLoggedOnSelector]);

  const handleClick = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleAuth = () => {
    setModalAuth(!isOpenModal);
  };

  const hadleLogOut = () => {
    dispatch(logOut());
    navigation("/");
  };

  return (
    <SHeader>
      <LogoFirst />
      <Navigation />
      <Button type="button" onClick={handleClick}>
        Заказать замер
      </Button>
      <Contacts />
      <SAuth>
        {isLoggedOnSelector ? (
          <SAuthBtn onClick={hadleLogOut}>
            <SAuthIcon src={IconExit} alt="exitIcon" />
            <ToolHint>выйти из личного кабинета</ToolHint>
          </SAuthBtn>
        ) : (
          <SAuthBtn onClick={handleAuth}>
            <SAuthIcon src={IconAuth} alt="authIcon" />
            <ToolHint>личный кабинет</ToolHint>
          </SAuthBtn>
        )}
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
