import { styled } from "styled-components";
import { fontMixin } from "../../assets/globalStyles";

export const SList = styled.ul.attrs({ className: "checkList" })`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  padding-left: 10px;
`;

export const SItem = styled.li.attrs({ className: "checkList__item" })`
  display: inherit;
  margin-bottom: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const STitle = styled.p.attrs({ className: "checkList__title" })`
  ${fontMixin.standard};
  margin-bottom: 5px;
  text-align: left;
`;

export const SText = styled.p.attrs({ className: "checkList__text" })`
  ${fontMixin.standard};
`;
