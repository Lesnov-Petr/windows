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
import { ReactComponent as Whatsapp } from "../../assets/images/whatsapp.svg";
import { ReactComponent as VK } from "../../assets/images/vk.svg";

export const Contacts: React.FC = () => {
  const socials = [
    {
      id: "telegram",
      Icon: Telegram,
      appUrl: "tg://resolve?domain=LesnovPetr",
      webUrl: "https://t.me/CheatorOfStar",
    },
    {
      id: "whatsapp",
      Icon: Whatsapp,
      appUrl: "whatsapp://send?phone=79684888586",
      webUrl: "https://web.whatsapp.com/send?phone=79684888586",
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

      <SPhone>8 968 488 85 86</SPhone>
      <SWorkTime>Ежедневно с 09:00 до 21:00</SWorkTime>
    </SContacts>
  );
};
