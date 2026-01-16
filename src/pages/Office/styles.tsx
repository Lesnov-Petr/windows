// styles.ts
import styled from "styled-components";
import { cubic, ms, color } from "../../assets/globalStyles";

export const SOffice = styled.div.attrs({ className: "office" })`
  font-family: Arial, sans-serif;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
`;

export const STabs = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
`;

export const STab = styled.button.attrs({ className: "office__tab" })<{
  $active: boolean;
}>`
  padding: 12px 24px;
  background: ${(props) => (props.$active ? color.accent_2 : color.accent)};
  color: ${(props) => (props.$active ? "white" : color.text)};
  border: none;
  border-radius: 4px 4px 0 0;
  cursor: pointer;
  font-size: 16px;
  margin-right: 8px;
  transition: all ${ms} ${cubic};

  &:hover {
    background: ${(props) => (props.$active ? color.accent_2 : color.accent)};
  }
`;

export const STabContent = styled.div.attrs({ className: "office__content" })`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 0 0 4px 4px;
  background-color: #fff;
`;

export const SList = styled.ul.attrs({ className: "office__list" })``;

export const SItem = styled.li.attrs({ className: "office__item" })``;

export const SName = styled.p.attrs({ className: "office__name" })``;

export const SPhone = styled.p.attrs({ className: "office__phone" })``;
