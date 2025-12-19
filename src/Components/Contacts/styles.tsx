import styled from "styled-components";
import { color, cubic, fontMixin } from "../../assets/globalStyles";

export const SContacts = styled.div.attrs({ className: "contacts" })`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const SBox = styled.p.attrs({ className: "contacts__box" })`
  display: flex;
  width: 100%;
`;

export const STitle = styled.p.attrs({ className: "contacts__title" })`
  ${fontMixin.standart};
  font-size: 18px;
  display: inherit;
  align-items: center;
`;

export const SList = styled.ul.attrs({ className: "contacts__list" })`
  display: inherit;
`;

export const SItem = styled.li.attrs({ className: "social__item" })``;

export const SLink = styled.a.attrs({ className: "social__link" })`
  display: flex;
  width: 24px;
  height: 24px;
  padding: 2px;
  border-radius: 50%;
  transition: border 250ms ${cubic};

  &:hover {
    border: 1px solid ${color.text};
  }
`;

export const SPhone = styled.p.attrs({ className: "contacts__phone" })`
  ${fontMixin.title};
  color: ${color.text};
`;

export const SWorkTime = styled.p.attrs({ className: "contacts__qorkTime" })`
  ${fontMixin.standart};
  color: ${color.accent_2};
`;
