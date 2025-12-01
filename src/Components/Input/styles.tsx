import styled from "styled-components";
import { inputMixin } from "../../assets/globalStyles";

export const SInput = styled.input.attrs({ className: "input" })`
  ${inputMixin.standart}
`;
