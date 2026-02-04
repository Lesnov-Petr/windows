import { SDescription, STitle, SList, SLink, SOverlay, SBox } from "./styles";
import changeHandle from "../../assets/images/description/changeHandle.png";
import changeHinger from "../../assets/images/description/changeHinger.png";
import changeWindow from "../../assets/images/description/changeWindow.png";
import childLock from "../../assets/images/description/childLock.png";
import insulation from "../../assets/images/description/insulation.png";
import mosquitNet from "../../assets/images/description/mosquitNet.png";
import restoration from "../../assets/images/description/restoration.png";
import sealant from "../../assets/images/description/sealant.png";
import sealingRubber from "../../assets/images/description/sealingRubber.png";
import sill from "../../assets/images/description/sill.png";
import windowsill from "../../assets/images/description/windowsill.png";
import casement from "../../assets/images/description/casement.png";
import { useState } from "react";
import Modal from "../Modal";
import FormContact from "../Form";

export const Description: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClick = () => {
    setIsOpenModal(!isOpenModal);
  };

  const listDescription = [
    { img: casement, alt: "Регулировка створок", price: 350 },
    { img: sealingRubber, alt: "Замена уплотнителя", price: 190 },
    { img: changeHandle, alt: "Замена ручек, гребенок", price: 390 },
    { img: changeHinger, alt: "Замена петель", price: 700 },
    { img: sealant, alt: "Герметизация окон", price: 150 },
    { img: insulation, alt: "Утепление окон", price: 250 },
    { img: changeWindow, alt: "Замена стеклопакетов", price: 3000 },
    { img: restoration, alt: "Реставрация окон", price: 1200 },
    { img: childLock, alt: "Утсановка детских замков", price: 800 },
    { img: mosquitNet, alt: "Установка москитных сеток", price: 1300 },
    { img: sill, alt: "Установка отливов", price: 1500 },
    { img: windowsill, alt: "Установка откосов и подоконников", price: 1500 },
  ];

  return (
    <SDescription>
      <SBox>
        <STitle>Виды услуг по ремонту окон</STitle>
        <SList>
          {listDescription.map((item) => (
            <SLink onClick={handleClick}>
              <img src={item.img} alt={item.alt} />
              <SOverlay />
              <div className="wrapper">
                <div className="icon-wrapper">
                  <span className="span">{item.alt}</span>
                  <span className="span price">от {item.price} ₽/м²</span>
                </div>
              </div>
            </SLink>
          ))}
        </SList>
      </SBox>
      <Modal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        title={"Заказать услугу"}
      >
        <FormContact onClick={handleClick} />
      </Modal>
    </SDescription>
  );
};
