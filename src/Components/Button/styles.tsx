import styled from "styled-components";
import { btnMixin } from "../../assets/globalStyles";

export const SButton = styled.button.attrs({ className: "button" })`
  ${btnMixin}
  width:10vw
`;
