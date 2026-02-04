import styled from "styled-components";
import { color, cubic, fontMixin } from "../../assets/globalStyles";
import { device } from "../../assets/globalStyles"; // путь к вашему файлу с device/media

export const SContacts = styled.div.attrs({ className: "contacts" })`
  display: flex;
  gap: 20px;

  @media ${device.mobile} {
    display: none;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export const SBox = styled.div.attrs({ className: "contacts__box" })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
  }

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const STitle = styled.p.attrs({ className: "contacts__title" })`
  ${fontMixin.title};
  font-size: 20px;
  display: inherit;
  width: 100%;
  align-items: center;
  color: ${color.textDarkGreen};
  font-weight: 600;

  @media ${device.mobile} {
    text-align: center;
  }

  @media ${device.tablet} {
    text-align: left;
  }
`;

export const SList = styled.ul.attrs({ className: "contacts__list" })`
  display: inherit;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 5px;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 10px 0;
  }

  @media ${device.tablet} {
    flex-direction: row;
    align-items: center;
  }
`;

export const SItem = styled.li.attrs({ className: "social__item" })`
  display: flex;

  @media ${device.mobile} {
    justify-content: center;
    width: 100%;
  }

  @media ${device.tablet} {
    justify-content: flex-start;
  }
`;

export const SLink = styled.a.attrs({ className: "social__link" })`
  display: flex;
  width: 24px;
  height: 24px;
  padding: 2px;
  border-radius: 50%;
  transition: border 250ms ${cubic};

  &:hover {
    transform: scale(1.1);
  }

  @media ${device.mobile} {
    width: 30px;
    height: 30px;
    padding: 3px;
  }

  @media ${device.tablet} {
    width: 26px;
    height: 26px;
    padding: 2.5px;
  }
`;

export const SBoxPhone = styled.div.attrs({ className: "contacts__boxPhone" })`
  display: flex;
  width: 100%;
  gap: 10px;

  @media ${device.mobile} {
  }

  @media ${device.tablet} {
  }
`;

export const SPhone = styled.p.attrs({ className: "contacts__phone" })`
  ${fontMixin.subTitle};
  color: ${color.textDarkGreen};
  font-weight: 600;

  @media ${device.mobile} {
    text-align: center;
    margin-bottom: 10px;
  }

  @media ${device.tablet} {
    text-align: right;
  }

  @media ${device.laptop} {
  }
`;

export const SWorkTime = styled.p.attrs({ className: "contacts__workTime" })`
  ${fontMixin.standard};
  color: ${color.accent_2};

  @media ${device.mobile} {
    text-align: center;
    margin-top: 5px;
  }

  @media ${device.tablet} {
    text-align: right;
  }
`;
