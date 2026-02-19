import { SBox } from "../Contacts/styles";
import {
  SFooter,
  STitle,
  SSection,
  SText,
  SList,
  SItem,
  SLink,
  SButton,
} from "./styles";
import { ReactComponent as Telegram } from "../../assets/images/telegram.svg";
import { ReactComponent as Max } from "../../assets/images/max.svg";
import { ReactComponent as VK } from "../../assets/images/vk.svg";
import { ReactComponent as ArrowUp } from "../../assets/images/arrowUp.svg";

export const Footer: React.FC<{}> = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const socials = [
    {
      id: "max",
      Icon: Max,
      appUrl: "https://web.max.ru?phone=79684888586",
      webUrl: "https://web.max.ru",
    },
    {
      id: "telegram",
      Icon: Telegram,
      appUrl: "tg://resolve?domain=LesnovPetr",
      webUrl: "https://t.me/CheatorOfStar",
    },

    {
      id: "vk",
      Icon: VK,
      appUrl: "vk://vk.com/",
      webUrl: "https://vk.com/",
    },
  ];
  const handleClick = (e: React.MouseEvent, webUrl: string) => {
    e.preventDefault();
    window.location.href = webUrl;
  };
  return (
    <SFooter id="footer">
      <SSection>
        <STitle>8 (968) 488-85-86</STitle>
        <SText>г. Москва</SText>
        <br />
        <br />
        <SText>Пн-Пт с 09:00-20:00</SText>
        <SText>Сб-Вс с 09:00-19:00</SText>
      </SSection>
      <SSection>
        <SText>Пиши нам в месенджерах:</SText>
        <br />
        <SBox>
          <SList>
            {socials.map((item) => (
              <SItem key={item.id}>
                <SLink
                  href={item.appUrl}
                  onClick={(e) => handleClick(e, item.webUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {<item.Icon />}
                </SLink>
              </SItem>
            ))}
          </SList>
        </SBox>
        <br />
        <br />
        <br />
        <SButton onClick={handleScrollToTop}>
          <ArrowUp />
        </SButton>
      </SSection>
    </SFooter>
  );
};
