import { styled } from "styled-components";
import { device } from "../../assets/globalStyles";
import { SToolHint } from "../ToolHint/styles";

export const SHeader = styled.div.attrs({ className: "header" })`
  display: flex;
  width: 100%;
  height: 110px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  /* @media ${device.tablet} {
    width: 60%;
  }

  @media ${device.desktop} {
    width: 20%;
  } */
`;

export const SAuth = styled.div.attrs({ className: "auth" })`
  position: relative;
  display: flex;
  cursor: pointer;
`;

export const SListBtn = styled.ul.attrs({ className: "auth__listBtn" })`
  display: flex;
`;

export const SAuthItemBtn = styled.li.attrs({ className: "auth__itemBtn" })`
  position: relative;

  &:hover ${SToolHint} {
    opacity: 1;
    visibility: visible;
  }
`;

export const SAuthIcon = styled.img.attrs({ className: "auth__icon" })`
  width: 30px;
  height: 30px;
`;
