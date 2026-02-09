import styled from "styled-components";
import { color, cubic, ms } from "../../assets/globalStyles";
import { SToolHint } from "../ToolHint/styles";

export const SButton = styled.button.attrs({ className: "button" })`
  position: relative;
  margin-right: 10px;
  padding: 2px;
  border-radius: 8px;
  transition: all ${ms} ${cubic};

  &:hover {
    outline: 2px solid ${color.accent_2};
  }
  &:hover ${SToolHint} {
    opacity: 1;
    visibility: visible;
  }
`;

export const SIcon = styled.img.attrs({
  className: "button__icon",
})`
  width: 25px;
  height: 25px;
  object-fit: contain;
`;
