import { SDescription, STitle, SList, SLink, SOverlay } from "./styles";
import window from "../../assets/images/window.svg";
import balckony from "../../assets/images/balcony.svg";
import door from "../../assets/images/door.svg";
import { Container } from "../Container";
import ImgWindow from "../../assets/images/imgWindow.png";
import ImgBalcony from "../../assets/images/imgBalcony.png";
import ImgDoors from "../../assets/images/imgDoors.png";
import { useState } from "react";
import Modal from "../Modal";
import FormContact from "../Form";

export const Description: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClick = () => {
    setIsOpenModal(!isOpenModal);
  };

  const listDescription = [
    {
      href: "/пластиковые-окна",
      img: ImgWindow,
      alt: "Окна",
      icon: window,
      price: 7567,
    },
    {
      href: "/балкон-лоджия",
      img: ImgBalcony,
      alt: "Балконы",
      icon: balckony,
      price: 10670,
    },
    {
      href: "/двери",
      img: ImgDoors,
      alt: "Двери",
      icon: door,
      price: 15313,
    },
  ];

  return (
    <SDescription>
      <Container>
        <STitle>
          ЦЕНЫ ПЛАСТИКОВЫХ ОКОН И ДВЕРЕЙ НА ЗАКАЗ СТАНДАРТНЫХ РАЗМЕРОВ
        </STitle>
        <SList>
          {listDescription.map((item) => (
            <SLink onClick={handleClick}>
              <img src={item.img} alt={item.alt} />
              <SOverlay />
              <div className="wrapper">
                <div className="icon-wrapper">
                  <img src={item.icon} alt={item.alt} className="icon" />
                  <span className="span">{item.alt}</span>
                  <span className="span price">от {item.price} ₽/м²</span>
                </div>
              </div>
            </SLink>
          ))}
        </SList>
      </Container>
      <Modal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        title={"Заказать замер"}
      >
        <FormContact onClick={handleClick} />
      </Modal>
    </SDescription>
  );
};
