import {
  SBox,
  SContacts,
  SItem,
  SLink,
  SList,
  SPhone,
  STitle,
  SWorkTime,
} from "./styles";
import { ReactComponent as Telegram } from "../../assets/images/telegram.svg";
import { ReactComponent as Max } from "../../assets/images/max.svg";
import { ReactComponent as VK } from "../../assets/images/vk.svg";
import { ReactComponent as Phone } from "../../assets/images/phone.svg";

export const Contacts: React.FC = () => {
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
    <SContacts>
      <SBox>
        <STitle>Напишите нам: </STitle>
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
      <SBox>
        <SLink>
          <Phone />
        </SLink>
        <SPhone>8 968 488 85 86</SPhone>
      </SBox>
      <SWorkTime>Ежедневно с 09:00 до 21:00</SWorkTime>
    </SContacts>
  );
};
