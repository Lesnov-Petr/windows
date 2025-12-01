import { SDescription, STitle, SList, SLink, SOverlay } from "./styles";
import window from "../../assets/images/window.svg";
import balckony from "../../assets/images/balcony.svg";
import door from "../../assets/images/door.svg";
import { Container } from "../Container";

export const Description: React.FC = () => {
  const listDescription = [
    {
      href: "/пластиковые-окна",
      img: "https://www.ecookna.ru/local/templates/v2021/images/main/window.jpg",
      alt: "Окна",
      icon: window,
      price: 7567,
    },
    {
      href: "/балкон-лоджия",
      img: "https://www.ecookna.ru/local/templates/v2021/images/main/balcony.jpg",
      alt: "Балконы",
      icon: balckony,
      price: 10670,
    },
    {
      href: "/двери",
      img: "https://www.ecookna.ru/local/templates/v2021/images/main/door.jpg",
      alt: "Двери",
      icon: door,
      price: 15313,
    },
  ];

  return (
    <SDescription>
      <Container>
        <STitle>ПЛАСТИКОВЫЕ ОКНА И ДВЕРИ НА ЗАКАЗ</STitle>
        <SList>
          {listDescription.map((item) => (
            <SLink href={item.href}>
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
    </SDescription>
  );
};
