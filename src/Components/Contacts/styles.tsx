import styled from "styled-components";
import { color, cubic, fontMixin } from "../../assets/globalStyles";
import { device } from "../../assets/globalStyles"; // путь к вашему файлу с device/media

export const SContacts = styled.div.attrs({ className: "contacts" })`
  display: flex;
  gap: 1.5rem;

  @media ${device.mobile} {
    gap: 0.8rem;
  }
`;

export const SBox = styled.div.attrs({ className: "contacts__box" })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const STitle = styled.p.attrs({ className: "contacts__title" })`
  ${fontMixin.title};
  width: 100%;
  align-items: center;
  color: ${color.textDarkGreen};
  font-weight: 700;

  @media ${device.mobile} {
    text-align: center;
  }

  @media ${device.tablet} {
    text-align: left;
  }
`;

export const SList = styled.ul.attrs({ className: "contacts__list" })`
  display: inherit;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 0.2rem;

  @media ${device.tablet} {
    flex-direction: row;
    align-items: center;
  }

  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0.2rem 0;
  }
`;

export const SItem = styled.li.attrs({ className: "social__item" })`
  display: flex;
  width: 100%;
`;

export const SLink = styled.a.attrs({ className: "social__link" })`
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  padding: 2px;
  border-radius: 50%;
  transition: border 250ms ${cubic};

  &:hover {
    transform: scale(1.1);
  }
`;

export const SBoxPhone = styled.div.attrs({ className: "contacts__boxPhone" })`
  display: flex;
  width: 100%;
  gap: 10px;
`;

export const SPhone = styled.p.attrs({ className: "contacts__phone" })`
  ${fontMixin.subTitle};
  color: ${color.textDarkGreen};
  font-weight: 600;

  @media (width < 36rem) {
    font-size: 0.8rem;
  }
`;

export const SWorkTime = styled.p.attrs({ className: "contacts__workTime" })`
  ${fontMixin.standard};
  color: ${color.accent_2};

  @media (width < 36rem) {
    font-size: 0.8rem;
  }

  @media ${device.tablet} {
    text-align: right;
  }
`;
