import { SDescription, STitle, SList, SLink, SOverlay, SBox } from "./styles";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import { getPriceList } from "../../redux/price/price-operations";
import { priceSelectorPrices } from "../../redux/price/price-selectors";
import Modal from "../Modal";
import FormContact from "../Form";

export const Description: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectorPrices = useSelector(priceSelectorPrices);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const listForPublic = selectorPrices.filter((price) => price.image);

  const handleClick = () => {
    setIsOpenModal(!isOpenModal);
  };

  useEffect(() => {
    dispatch(getPriceList());
  }, []);

  return (
    <SDescription>
      <SBox>
        <STitle>Виды услуг по ремонту окон</STitle>
        <SList>
          {listForPublic.length > 0 &&
            listForPublic.map((item) => (
              <SLink onClick={handleClick}>
                <img
                  src={`https://api.оконный-континент.рф${item.image}`}
                  alt={item.name}
                />
                <SOverlay />
                <div className="wrapper">
                  <div className="icon-wrapper">
                    <span className="span">{item.name}</span>
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
