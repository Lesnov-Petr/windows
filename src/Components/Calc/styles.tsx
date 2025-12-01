import styled from "styled-components";
import { fontMixin } from "../../assets/globalStyles";

export const SCalc = styled.div.attrs({ className: "calc" })`
  display: flex;
  padding: 20px;
`;

export const STitle = styled.div.attrs({ className: "calc__title" })`
  ${fontMixin.title}
  font-size:40px
`;
