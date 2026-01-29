import styled from "styled-components";
import { textareaMixin } from "../../assets/globalStyles";

export const STextarea = styled.textarea.attrs({ className: "textarea" })`
  ${textareaMixin.standard}
`;
