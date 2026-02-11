import {
  SDescription,
  STitle,
  SList,
  SItem,
  SLink,
  SOverlay,
  SBox,
  SSection,
  SListReasons,
  SBoxReasons,
  SItemReason,
  STitleReasons,
  SKey,
  SSubTitleReasons,
} from "./styles";
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
  const listReasons = [
    {
      key: "01",
      title: "Продление срока службы конструкций",
      listDetails: [
        "Проверка механизмов на их работоспособность",
        "Обеспечение своевременного ремонта комплектующих и фарнитур",
      ],
    },
    {
      key: "02",
      title: "Найти места теплопотерь",
      listDetails: [
        "Cохранить энергоэффективность",
        "Снизить затраты на отопление зимой",
      ],
    },
    {
      key: "03",
      title: "Обеспечение комфортного микроклимата",
      listDetails: [
        "Устранение сквозняков",
        "Решить проблему с шумоизоляцией и запотеванием окон",
      ],
    },
    {
      key: "04",
      title: "Повышение безопасности",
      listDetails: [
        "Проверка на деформацию конструкции",
        "Исключения потенциальных точек проникновения извне",
      ],
    },
    {
      key: "05",
      title: "Сохранение эстетического вида",
      listDetails: [
        "Недопустить  пожелтения или деформции профелей",
        "Удаления загрязнений дренажных систем",
      ],
    },
  ];

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
        <SBoxReasons>
          <SSection>
            <STitleReasons>ДЛЯ ЧЕГО ПРОВОДИТЬ ДИАГНОСТИКУ ОКОН?</STitleReasons>
          </SSection>
          <SSection>
            <SListReasons>
              {listReasons.map((reason) => (
                <SItem key={reason.key}>
                  <SKey>{reason.key}</SKey>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <SSubTitleReasons>{reason.title}</SSubTitleReasons>
                    {reason.listDetails.map((item) => (
                      <SItemReason>{item}</SItemReason>
                    ))}
                  </div>
                </SItem>
              ))}
            </SListReasons>
          </SSection>
        </SBoxReasons>
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
