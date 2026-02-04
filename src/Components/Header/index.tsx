import { SAuth, SAuthItemBtn, SAuthIcon, SHeader, SListBtn } from "./styles";
import FormContact from "../Form";
import { LogoFirst } from "../Logo";
import { Navigation } from "../Navigation";
import { Contacts } from "../Contacts";
import { Button } from "../Button";
import { useEffect, useState } from "react";
import IconAuth from "../../assets/images/iconAdmin.png";
import IconExit from "../../assets/images/exit.png";
import IconSuitcase from "../../assets/images/iconSuitcase.png";
import Modal from "../Modal";
import { ToolHint } from "../ToolHint";
import Auth from "../Auth";
import { useSelector } from "react-redux";
import { authSelectorLogged } from "../../redux/auth/auth-selectors";
import { logOut } from "../../redux/auth/auth-operations";
import { useAppDispatch } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { BurgerMenu } from "../BurgerMenu";

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

  const menuItems = [
    { label: "Главная", href: "/" },
    { label: "О нас", href: "/about" },
    { label: "Контакты", href: "/contact" },
  ];

  return (
    <>
      <SHeader>
        <LogoFirst />
        <Navigation />
        <Button type="button" onClick={handleClick}>
          Заказать замер
        </Button>
        <Contacts />
        <SAuth>
          {isLoggedOnSelector ? (
            <SListBtn>
              <SAuthItemBtn
                key={"office"}
                onClick={() => navigation("/office")}
              >
                <SAuthIcon src={IconSuitcase} alt="suitcase" />
                <ToolHint>личный кабинет</ToolHint>
              </SAuthItemBtn>
              <SAuthItemBtn key={"exit"} onClick={hadleLogOut}>
                <SAuthIcon src={IconExit} alt="exitIcon" />
                <ToolHint>выйти из личного кабинета</ToolHint>
              </SAuthItemBtn>
            </SListBtn>
          ) : (
            <SListBtn>
              <SAuthItemBtn key={"desk"} onClick={handleAuth}>
                <SAuthIcon src={IconAuth} alt="authIcon" />
                <ToolHint>вход в личный кабинет</ToolHint>
              </SAuthItemBtn>
            </SListBtn>
          )}
        </SAuth>
        <BurgerMenu>
          <SAuth>
            {isLoggedOnSelector ? (
              <SListBtn>
                <SAuthItemBtn
                  key={"office"}
                  onClick={() => navigation("/office")}
                >
                  <SAuthIcon src={IconSuitcase} alt="suitcase" />
                  <ToolHint>личный кабинет</ToolHint>
                </SAuthItemBtn>
                <SAuthItemBtn key={"exit"} onClick={hadleLogOut}>
                  <SAuthIcon src={IconExit} alt="exitIcon" />
                  <ToolHint>выйти из личного кабинета</ToolHint>
                </SAuthItemBtn>
              </SListBtn>
            ) : (
              <SListBtn>
                <SAuthItemBtn key={"desk"} onClick={handleAuth}>
                  <SAuthIcon src={IconAuth} alt="authIcon" />
                  <ToolHint>вход в личный кабинет</ToolHint>
                </SAuthItemBtn>
              </SListBtn>
            )}
          </SAuth>
        </BurgerMenu>
      </SHeader>
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
    </>
  );
};
